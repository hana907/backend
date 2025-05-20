import express from "express";
import { addArticle, getArticles } from "../controllers/articleController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addArticle);
router.get("/", getArticles);

export default router;