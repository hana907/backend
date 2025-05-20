import express from "express";
import { getTherapyTips , addTherapyTip } from "../controllers/therapyTipsController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/", authMiddleware, getTherapyTips);
router.post("/", authMiddleware, addTherapyTip);

export default router;