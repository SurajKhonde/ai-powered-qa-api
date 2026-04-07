import express from "express";
import { getAllDocs } from "../controllers/doc.controller.js";
import {authMiddleware} from '../middleware/auth.middleware.js'
import rateLimit from "express-rate-limit";
const router = express.Router();

router.get("/",authMiddleware,rateLimit, getAllDocs);


export default router;