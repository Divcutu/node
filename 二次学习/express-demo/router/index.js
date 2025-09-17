import express from "express";
import userRouter from "./user.js";
const router = express.Router();

// 用户
router.use('/user', userRouter);

export default router;