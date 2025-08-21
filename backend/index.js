// index.js
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";

// Models
import Message from "./models/Message.js";
import Question from "./models/Question.js";
import Comment from "./models/Comment.js";

// ---------- Config ----------
dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Fix __dirname (ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- MongoDB ----------
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shehealth")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ Mongo error:", err.message);
    process.exit(1);
  });

/* ============================================================
   PART 1: Period Tracker (Cycle Logs + Prediction APIs)
   ============================================================ */

// ---------- Schema ----------
const cycleLogSchema = new mongoose.Schema({
  user_id: { type: Number, default: 1 },
  last_period_date: { type: String, required: true },
  cycle_length: { type: Number, required: true },
  symptoms: { type: [String], default: [] },
  mood: { type: String },
  notes: { type: String },
  created_at: { type: Date, default: Date.now }
});
const CycleLog = mongoose.model("CycleLog", cycleLogSchema);

// ---------- Helpers ----------
const PCOS_SYMPTOMS = new Set(["acne","weight gain","hair loss","irregular bleeding"]);

function daysBetween(isoA, isoB) {
  const a = new Date(isoA);
  const b = new Date(isoB);
  return Math.round(Math.abs(b - a) / (1000 * 60 * 60 * 24));
}
function mean(arr){ return arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0; }
function stddev(arr){ if(arr.length<2) return 0; const m=mean(arr); return Math.sqrt(mean(arr.map(x=>(x-m)**2))); }
function addDays(iso, d){ const dt=new Date(iso); dt.setDate(dt.getDate()+d); return dt.toISOString().slice(0,10); }
function fertileWindow(lastDateISO, cycleLen){ const ovul=cycleLen-14; return {start:addDays(lastDateISO,ovul-4), end:addDays(lastDateISO,ovul+1)}; }
function irregularityScore(currentLen, gaps){
  if (!gaps.length) return { score: 0.3, meanGap: currentLen, std: 0 };
  const m = Math.round(mean(gaps));
  const s = stddev(gaps);
  const dev = Math.abs(currentLen - m);
  let score = Math.min(1, (dev/10) + (s/10));
  if (currentLen < 21 || currentLen > 35) score = Math.max(score, 0.7);
  return { score: Number(score.toFixed(2)), meanGap: m, std: Number(s.toFixed(2)) };
}
function pcosRisk(symptoms, irrScore){
  const hit = symptoms.filter(s => PCOS_SYMPTOMS.has(s));
  let level = "low";
  if (irrScore >= 0.7 && hit.length >= 2) level = "high";
  else if (irrScore >= 0.5 || hit.length >= 2) level = "medium";
  const reasons = [];
  if (irrScore >= 0.5) reasons.push(`irregularity_score=${irrScore}`);
  if (hit.length) reasons.push(`symptoms: ${hit.join(", ")}`);
  return { level, reasons };
}
function dietNudges(symptoms, notes){
  const text = (notes || "").toLowerCase();
  const s = new Set(symptoms);
  const tips = [];
  if (s.has("fatigue") || text.includes("tired")) tips.push("Boost iron + protein: dal, chana, palak; pair iron with vitamin-C.");
  if (s.has("bloating")) tips.push("Cut salt/processed foods; hydrate; add fiber (salads, fruits).");
  if (s.has("acne")) tips.push("Reduce sugar/caffeine; add zinc & omega-3 (seeds, nuts).");
  if (s.has("mood swings")) tips.push("Regular sleep, complex carbs, B-vitamins; light exercise.");
  if (!tips.length) tips.push("Hydration, fiber, sleep hygiene, and 30-min walk daily.");
  return tips;
}
function trendInsight(logs){
  if (logs.length < 4) return null;
  const half = Math.floor(logs.length/2);
  const m1 = Math.round(mean(logs.slice(0, half).map(l => l.cycle_length)));
  const m2 = Math.round(mean(logs.slice(half).map(l => l.cycle_length)));
  if (m2 - m1 >= 3) return "Cycle length trending longer lately.";
  if (m1 - m2 >= 3) return "Cycle length trending shorter lately.";
  return "Cycle length stable overall.";
}

// ---------- APIs ----------
app.post("/api/logs", async (req, res) => {
  try {
    const { userId = 1, lastPeriodDate, cycleLength, symptoms = [], mood, notes } = req.body;
    await CycleLog.create({ user_id: userId, last_period_date: lastPeriodDate, cycle_length: cycleLength, symptoms, mood, notes });
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ ok: false, message: "Error saving log" }); }
});

app.get("/api/logs", async (req, res) => {
  try {
    const logs = await CycleLog.find({ user_id: Number(req.query.userId || 1) }).sort({ created_at: -1 }).limit(Number(req.query.limit || 20));
    res.json(logs);
  } catch (e) { res.status(500).json({ message: "Error fetching logs" }); }
});

app.post("/api/predict", async (req, res) => {
  try {
    const { userId = 1, lastPeriodDate, cycleLength, symptoms = [], mood = "normal", notes = "" } = req.body;
    const hist = await CycleLog.find({ user_id: userId }).sort({ last_period_date: 1 });
    const logs = hist.map(r => ({ last_period_date: r.last_period_date, cycle_length: r.cycle_length, symptoms: r.symptoms }));
    const gaps=[]; for(let i=0;i<logs.length-1;i++){ const d=daysBetween(logs[i].last_period_date, logs[i+1].last_period_date); if(d>0&&d<60) gaps.push(d); }
    const irr = irregularityScore(Number(cycleLength), gaps);
    const risk = pcosRisk(symptoms, irr.score);
    const avgGap = (logs.length && gaps.length) ? irr.meanGap : Number(cycleLength);
    const nextExpected = addDays(lastPeriodDate, avgGap);
    const fertile = fertileWindow(lastPeriodDate, Number(cycleLength));
    const nudges = dietNudges(symptoms, notes);
    const trend = trendInsight(logs);
    const status = risk.level==="high" ? "Consider consulting a gynecologist if patterns persist."
      : risk.level==="medium" ? "Monitor for 2–3 cycles; consider lifestyle tweaks."
      : "Looks okay. Keep tracking for better accuracy.";
    res.json({ next_expected_date: nextExpected, fertile_window: fertile, average_gap: avgGap, gap_stddev: irr.std,
      irregularity_score: irr.score, pcos_risk: risk, status, suggestions: nudges, trend: trend||null });
  } catch (e) { res.status(500).json({ message: "Error generating prediction" }); }
});

/* ============================================================
   PART 2: Chat + Q&A with Socket.IO
   ============================================================ */

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));
app.get("/ask.html", (req, res) => res.sendFile(path.join(__dirname, "public/ask.html")));
app.get("/question.html", (req, res) => res.sendFile(path.join(__dirname, "public/question.html")));

// APIs
app.get("/api/messages/:room", async (req, res) => {
  const messages = await Message.find({ room: req.params.room }).sort({ timestamp: 1 });
  res.json({ messages });
});
app.get("/api/questions", async (req, res) => {
  const questions = await Question.find().sort({ timestamp: -1 });
  res.json({ questions });
});
app.get("/api/comments/:questionId", async (req, res) => {
  const comments = await Comment.find({ question: req.params.questionId }).sort({ timestamp: 1 });
  res.json({ comments });
});

// Bad Words Filter
const badWords = ["bitch","ass","shit","fuck","bastard","dick","pussy","crap","faggot",
  "chutiya","lund","madarchod","bhosdike","randi","gandu"];
function censorText(text) {
  if (!text) return text;
  let censored = text;
  badWords.forEach(word => {
    const regex = new RegExp(word, "gi");
    censored = censored.replace(regex, "*****");
  });
  return censored;
}

// Socket.io
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("joinRoom", room => socket.join(room));

  socket.on("sendMessage", async (msg) => {
    const cleanText = censorText(msg.message);
    const message = new Message({ username: msg.username, message: cleanText, room: msg.room });
    await message.save();
    io.to(msg.room).emit("newMessage", message);
  });

  socket.on("sendQuestion", async (q) => {
    const question = new Question({
      username: q.username,
      title: censorText(q.title),
      body: censorText(q.body),
      upvotes: 0, voters: []
    });
    await question.save();
    io.emit("newQuestion", question);
  });

  socket.on("upvoteQuestion", async (id) => {
    const question = await Question.findById(id);
    if (question && !question.voters.includes(socket.id)) {
      question.upvotes += 1;
      question.voters.push(socket.id);
      await question.save();
      io.emit("updateQuestion", question);
    }
  });

  socket.on("addComment", async (comment) => {
    const newComment = new Comment({
      username: comment.username,
      text: censorText(comment.text),
      question: comment.questionId
    });
    await newComment.save();
    io.emit("newComment", newComment);
  });

  socket.on("disconnect", () => console.log("❌ User disconnected:", socket.id));
});

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
