// controller/carrierController.js (Step 1 - Patient Data)
import Carrier from "../models/Carrier.js";

export const createCarrier = async (req, res) => {
  try {
    const { name, dateOfBirth, diagnosis, notes, goal, familyId } = req.body;

    const newCarrier = await Carrier.create({
      name,
      dateOfBirth,
      diagnosis,
      notes,
      goal,
      familyId: familyId || null,
    });

    res.status(201).json({ message: "Carrier created successfully", carrier: newCarrier });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};