import express from "express";
import { askController } from "../controllers/ask.controller.js";

import {authMiddleware} from '../middleware/auth.middleware.js'
import askLimiter from "../middleware/rateLimit.js";
const router = express.Router();


router.post("/",authMiddleware,askLimiter, askController);

export default router;