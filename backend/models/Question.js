import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  upvotes: {
    type: Number,
    default: 0
  },
  voters: {
    type: [String], // store user IDs who upvoted
    default: []
  },
  comments: [
    {
      username: String,
      text: String,
      timestamp: { type: Date, default: Date.now }
    }
  ],
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
