import express from 'express';
import { listController } from '../controller/data.js'
const router = express.Router();

router.get('/lists', listController)

export default router;