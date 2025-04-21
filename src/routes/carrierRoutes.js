// routes/carrierRoutes.js
import express from "express";

const router = express.Router();
const { createCarrier } = require('../controllers/carrierController');
const authMiddleware = require('../middlewares/authMiddleware'); // Assuming you have JWT middleware

// Route to create a carrier
router.post('/create-carrier', authMiddleware, createCarrier);

module.exports = router;