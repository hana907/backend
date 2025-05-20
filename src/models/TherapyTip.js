import mongoose from "mongoose";

const TherapyTipSchema = new mongoose.Schema({
 title: {
   en: { 
    type: String, 
    required: true 
   },
   am: { 
    type: String, 
    default: "" 
   },
 },
 description: {
   en: { 
    type: String, 
    required: true 
   },
   am: { 
    type: String, 
    required: true
   },
 },
 category: { 
  type: String, 
  default: "General" 
 },
}, { timestamps: true });

export default mongoose.model("TherapyTip", TherapyTipSchema);