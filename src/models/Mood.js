// models/Mood.js
import mongoose from 'mongoose';

const { Schema } = mongoose;


const MoodSchema = new Schema({
  carrierId: {
    type: Schema.Types.ObjectId,
    ref: 'Carrier',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  moodType: {
    type: String,
    enum: ['happy', 'sad', 'calm', 'anxious', 'angry', 'depressed', 'excited'],
    required: true,
  },
  moodScore: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  behavior: {
    type: String,
    enum: ['restless', 'quiet', 'agitated', 'talkative', 'withdrawn', 'energetic', 'normal'],
    required: true,
  },
  description: {
    type: String,
    maxlength: 500,
    default: '',
  },
}, { timestamps: true });

const Mood = mongoose.model('Mood', MoodSchema);
export default Mood;