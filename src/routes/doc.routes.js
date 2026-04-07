import express from "express";
import { getAllDocs } from "../controllers/doc.controller.js";
import {authMiddleware} from '../middleware/auth.middleware.js'
import {askLimiter} from "../middleware/rateLimit.js";
const router = express.Router();

router.get("/",authMiddleware,askLimiter, getAllDocs);


export default router;