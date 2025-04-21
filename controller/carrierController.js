// controllers/carrierController.js

const Carrier = require('../models/Carrier');
const User = require('../models/User');
const Family = require('../models/Family');

exports.createCarrier = async (req, res) => {
  try {
    const { name, dateOfBirth, diagnosis, notes, goal, familyId } = req.body;

    // Get logged-in user (admin of family)
    const adminId = req.user.id;

    // Check if family exists
    const family = await Family.findById(familyId);
    if (!family) {
      return res.status(404).json({ message: 'Family not found' });
    }

    // Create carrier (autistic person)
    const newCarrier = await Carrier.create({
      name,
      dateOfBirth,
      diagnosis,
      notes,
      goal,
      familyId,
    });

    // Optionally, you can also associate this carrier with the family members, like updating the family model

    res.status(201).json({
      message: 'Carrier created successfully',
      carrier: newCarrier,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};