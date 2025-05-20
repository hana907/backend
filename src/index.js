//src/index.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import familyRoutes from "./routes/familyRoutes.js";
import carrierRoutes from "./routes/carrierRoutes.js";
import therapyTipsRoutes from "./routes/therapyTipsRoutes.js"; // Ensure this is imported

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // This is the body-parser for JSON
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/carrier", carrierRoutes);
app.use("/api/therapy-tips", therapyTipsRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://0.0.0.0:${PORT}`));