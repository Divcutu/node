import { jwtVerify } from '../utils/jwtGenerate.js'

/**
 * token验证
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const jwtVerifyMiddlwire = (req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) {
        res.status(401).json({ message: '未登录' })
    }
    try {
        const payload = jwtVerify(token)
        console.log(payload, 'payload')
        req.user = payload
        next()
    } catch (error) {
        res.status(401).json({ message: 'token无效' })
    }
}