import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  room: {
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
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
