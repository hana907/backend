import Behavior from "../models/Behavior.js";

// Record a new behavior
export const recordBehavior = async (req, res) => {
  try {
    const { carrierId, behaviorType, value, date } = req.body;
    const behavior = await Behavior.create({
      carrierId,
      behaviorType,
      value,
      date: date || new Date(),
    });
    res.status(201).json({ message: "Behavior recorded successfully", behavior });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get behavior history for a carrier
export const getBehaviorHistory = async (req, res) => {
  try {
    const { carrierId } = req.params;
    const history = await Behavior.find({ carrierId }).sort({ date: 1 }); // Sort by date ascending
    res.status(200).json({ history });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};