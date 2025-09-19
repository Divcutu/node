/**
 * 用来处理路由的控制器
 */
import { userModel } from '../model/index.js'
import argon2  from 'argon2'

/**
 * 注册接口处理函数
 * @param {object} req 
 * @param {*} res 
 * @param {*} next 
 */
export const handleRegister = async (req, res, next) => {
    // const result = await useModel.save(req.body)
    const password = await argon2.hash(req.body.password)
    const user = new userModel({ ...req.body, password })
    const ret = await user.save()

    res.send('register')
}

/**
 * 登录接口处理函数
 * @param {any} req 
 * @param {*} res 
 * @param {*} next 
 */
export const handleLogin = async (req, res, next) => {

    const user = await userModel.findOne({ username: req.body.username })
    console.log(user)
    const result = await argon2.verify(user.password, req.body.password)
    console.log(result, user.password, req.body.password)
    if (!result) {
        return res.status(402).json({ code: 402, message: '密码错误'})
    }
    res.send('login')
}