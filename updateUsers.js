import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/User.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    // Update all users without a role to have role: "user"
    const updateResult = await User.updateMany(
      { role: { $exists: false } }, // Find users without a role field
      { $set: { role: "user" } } // Set role to "user"
    );

    console.log(`Updated ${updateResult.modifiedCount} users with role: "user"`);

    // Set a specific user as admin (e.g., test@example.com)
    const adminResult = await User.updateOne(
      { email: "test@example.com" }, // Replace with your admin user's email
      { $set: { role: "admin" } }
    );

    if (adminResult.modifiedCount > 0) {
      console.log("Admin user updated successfully");
    } else {
      console.log("Admin user not found or already updated");
    }

    mongoose.connection.close();
    console.log("MongoDB connection closed");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    mongoose.connection.close();
  });