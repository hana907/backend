import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  messages: [
    {
      sender: { type: String, enum: ["user", "bot"], required: true },
      content: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

export default mongoose.model("Chat", ChatSchema);