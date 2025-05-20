// models/Family.js
import mongoose from "mongoose";


const FamilySchema = new mongoose.Schema({
  familyName: {
    type: String,
    required: true,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  adminRelation: {
    type: String,
    enum: ['parent', 'sibling', 'grandparent', 'caregiver', 'other'], // More relevant options
    required: true,
  },
  carrierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Carrier',
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, { timestamps: true });


export default mongoose.model('Family', FamilySchema);

