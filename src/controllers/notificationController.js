import Notification from "../models/Notification.js";

export const createNotification = async (req, res) => {
  try {
    const { userId, message } = req.body;

    const newNotification = await Notification.create({
      userId,
      message,
    });

    res.status(201).json({ message: "Notification created", notification: newNotification });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    const notifications = await Notification.find({ userId, isRead: false }).sort({ createdAt: -1 });
    res.status(200).json({ notifications });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};