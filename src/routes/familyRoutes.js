// routes/familyRoutes.js
import express from "express";
import { createFamily, addFamilyMembers } from '../controllers/familyController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createFamily); // Step 2
router.post('/add-members', authMiddleware, addFamilyMembers); // Step 3

export default router;