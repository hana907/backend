import Chat from "../models/Chat.js";

export const startChat = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user.id;

    let chat = await Chat.findOne({ userId });
    if (!chat) {
      chat = await Chat.create({ userId, messages: [] });
    }

    chat.messages.push({ sender: "user", content: message });
    chat.messages.push({ sender: "bot", content: "This is a placeholder response. Integrate with an AI service for real replies." });
    await chat.save();

    res.status(200).json({ messages: chat.messages });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getChatHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const chat = await Chat.findOne({ userId });
    res.status(200).json({ messages: chat?.messages || [] });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};