import express from "express";
import { getLogs } from "../controllers/log.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { isAdmin } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get("/", authMiddleware,isAdmin, getLogs);

export default router;