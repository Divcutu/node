import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../constants/index.js'

/**
 * 生成JWT token码
 * @param {*} payload 
 * @param {*} expiresIn 
 * @returns 
 */
export const jwtGenerator = (payload, expiresIn = 3 * 60) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: expiresIn || '1d'
  })
}

/**
 * 校验token码
 * @param {*} token 
 * @returns 
 */
export const jwtVerify = (token) => {
  return jwt.verify(token, JWT_SECRET)
}