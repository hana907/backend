import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    en: { type: String, required: true },
    am: { type: String, default: "" },
  },
  content: {
    en: { type: String, required: true },
    am: { type: String, default: "" },
  },
  category: { type: String, default: "General" },
}, { timestamps: true });

export default mongoose.model("Article", ArticleSchema);