import express from "express";
import userRouter from "./user.js";
import dataRouter from "./data.js";
const router = express.Router();

// 用户
router.use('/user', userRouter);
router.use('/data', dataRouter);

export default router;