// controllers/familyController.js

const Family = require('../models/Family');
const User = require('../models/User');

exports.createFamily = async (req, res) => {
  try {
    const { familyName, adminRelation, carrierId } = req.body;

    // Get logged-in user (assuming auth middleware checks JWT and adds user to req)
    const adminId = req.user.id;

    // Create family
    const newFamily = await Family.create({
      familyName,
      adminId,
      adminRelation,
      carrierId,
    });

    // Update user with familyId after family creation
    await User.findByIdAndUpdate(adminId, { familyId: newFamily._id });

    res.status(201).json({
      message: 'Family created successfully',
      family: newFamily,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};