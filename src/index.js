import express from "express";
import "dotenv/config";


import authRoutes from "./routes/authRoutes.js";
import familyRoutes from "./routes/familyRoutes.js";
import carrierRoutes from "./routes/carrierRoutes.js"


import { connectDB } from "./lib/db.js";

const app = express(); 
const PORT= process.env.PORT || 3000;

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use('/api/families', familyRoutes);
app.use('/api/carriers', carrierRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});