// routes/familyRoutes.js
import express from "express";
import { createGroup } from '../controllers/createGroup.js';
// import authMiddleware from '../middleware/auth.middleware';



const router = express.Router();
const { createFamily } = require('../controllers/familyController');
const authMiddleware = require('../middlewares/authMiddleware'); // assuming you have JWT middleware

// Route to create a family
router.post('/createGroup', authMiddleware, createGroup);

module.exports = router;