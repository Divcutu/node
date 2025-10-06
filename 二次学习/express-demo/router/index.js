import express from "express";
import userRouter from "./user.js";
import dataRouter from "./data.js";
import staticRouter from "./static.js";
const router = express.Router();

// 用户
router.use('/user', userRouter);
router.use('/data', dataRouter);
router.use('/static', staticRouter);

export default router;