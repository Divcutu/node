import { query, body, validationResult } from 'express-validator'
import { validate } from '../utils/validator.js'

export const validateUserLogin = validate([
    body('username').isLength({ min: 3 }).withMessage('用户名长度不能小于3位'),
    body('password').isLength({ min: 6 }).withMessage('密码长度不能小于6位'),
])