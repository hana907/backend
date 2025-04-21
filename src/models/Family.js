import mongoose from "mongoose";

// models/Family.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const FamilySchema = new Schema({
    
  familyName: {
    type: String,
    required: true,
  },
  adminId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // The creator of the family group
    
  },
  adminRelation: {
    type: String,
    enum: ['family', 'friend', 'partner'], // You can add more if needed
    default: 'family', // default relation
  },
  carrierId: {
    type: Schema.Types.ObjectId,
    ref: 'Carrier', // Optional: this could represent a health/social worker
  },
}, { timestamps: true }); // This adds createdAt and updatedAt automatically



module.exports = mongoose.model('Family', FamilySchema);

