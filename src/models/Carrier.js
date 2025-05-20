// models/Carrier.js
import mongoose from "mongoose";


const CarrierSchema = new mongoose.Schema({
  familyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Family',
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  diagnosis: {
    type: String,
    default: '',
  },
  notes: {
    type: String,
    default: '',
  },
  goal: {
    type: String,
    default: '',
  },
}, { timestamps: true });


export default mongoose.model('Carrier', CarrierSchema);
