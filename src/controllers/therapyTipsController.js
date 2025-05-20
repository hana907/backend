import TherapyTip from "../models/TherapyTip.js";

// GET /api/therapy-tips - Fetch all therapy tips
export const getTherapyTips = async (req, res) => {
  try {
    const tips = await TherapyTip.find();
    res.status(200).json({ tips });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST /api/therapy-tips - Add a new therapy tip
export const addTherapyTip = async (req, res) => {
  try {
    // Check if user is an admin (assuming user role is stored in req.user)
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admins can add therapy tips" });
    }

    const { title, description, category } = req.body;

    if (!title || !title.en || !title.am || !description || !description.en || !description.am) {
      return res.status(400).json({ message: "Title and description must have both English (en) and Amharic (am) versions" });
    }

    const newTip = await TherapyTip.create({
      title,
      description,
      category: category || "general",
    });

    res.status(201).json({ message: "Therapy tip added successfully", tip: newTip });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};