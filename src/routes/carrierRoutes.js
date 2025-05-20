// routes/carrierRoutes.js
import express from "express";
import { createCarrier } from  '../controllers/carrierController.js';
import authMiddleware  from '../middleware/authMiddleware.js'; // Assuming you have JWT middleware


const router = express.Router();


// Route to create a carrier
router.post("/create-carrier", authMiddleware, createCarrier);

export default router;