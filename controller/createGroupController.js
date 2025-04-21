const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const User = require('../models/User');
const Family = require('../models/Family');
const Carrier = require('../models/Carrier');

const createFamilyAndCarrier = async (req, res) => {
  // Step 1: Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    familyName, adminRelation, // Family data
    carrierName, dateOfBirth, diagnosis, notes, goal // Carrier data
  } = req.body;
  const userId = req.user._id; 

  // Step 2: Start a MongoDB transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Check if user already has a family
    const user = await User.findById(userId).session(session);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.familyId) {
      throw new Error('User already belongs to a family');
    }

    // Create the Carrier (Patient)
    const carrier = new Carrier({
      name: carrierName,
      dateOfBirth,
      diagnosis,
      notes,
      goal
    });

    // Create the Family
    const family = new Family({
      familyName,
      adminId: userId,
      adminRelation,
      carrierId: carrier._id
    });

    // Link carrier to family
    carrier.familyId = family._id;

    // Update user's familyId
    user.familyId = family._id;

    // Save all documents within the transaction
    await carrier.save({ session });
    await family.save({ session });
    await user.save({ session });

    // Commit the transaction
    await session.commitTransaction();

    res.status(201).json({
      message: 'Family and Carrier created successfully',
      family,
      carrier
    });
  } catch (error) {
    // Roll back the transaction on error
    await session.abortTransaction();
    console.error(error);
    res.status(500).json({ message: error.message || 'Server error' });
  } finally {
    // End the session
    session.endSession();
  }
};

module.exports = { createFamilyAndCarrier };