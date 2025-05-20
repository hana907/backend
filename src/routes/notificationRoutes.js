import express from "express";
import { createNotification, getNotifications } from "../controllers/notificationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createNotification);
router.get("/", authMiddleware, getNotifications);

export default router;