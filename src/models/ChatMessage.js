import mongoose, { Schema } from "mongoose";

const ChatMessageSchema = new mongoose.Schema({

   
   familyId:{
    type: Schema.Types.ObjectId,
    ref: 'Family', // refers to the family model
    required: true,
   },
   userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // refers to the user model
    required: true,
   },
   
   content:{
    type: String,
    required: true,
   },
   sentAt:{
    type: Date,
    default: Date,now,
   },
  
  }, { timestamps: true }
);

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
