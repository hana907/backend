import express from "express";
import { recordBehavior, getBehaviorHistory } from "../controllers/behaviorController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/record", authMiddleware, recordBehavior);
router.get("/history/:carrierId", authMiddleware, getBehaviorHistory);

export default router;