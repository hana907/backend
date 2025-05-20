import mongoose from "mongoose";

const BehaviorSchema = new mongoose.Schema(
  {
    carrierId: { type: mongoose.Schema.Types.ObjectId, ref: "Carrier", required: true },
    behaviorType: { type: String, required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Behavior", BehaviorSchema);