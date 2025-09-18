import express from 'express'
import { handleRegister, handleLogin } from '../controller/index.js'
import { validateUserLogin } from '../middleWare/userValidator.js'
const router = express.Router()

// 用户
router.post('/login', validateUserLogin, handleLogin)

router.post('/register', handleRegister)

export default router