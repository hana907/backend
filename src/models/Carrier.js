import mongoose from "mongoose";


// models/Carrier.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarrierSchema = new Schema({

  familyId: {
    type: Schema.Types.ObjectId,
    ref: 'Family',
    required: true,
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
}, { timestamps: true }); // adds createdAt and updatedAt

module.exports = mongoose.model('Carrier', CarrierSchema);


