import express from "express";
import { startChat, getChatHistory } from "../controllers/chatController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/start", authMiddleware, startChat);
router.get("/history", authMiddleware, getChatHistory);

export default router;