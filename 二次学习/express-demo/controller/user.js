/**
 * 用来处理路由的控制器
 */
import { userModel } from '../model/index.js'
import argon2 from 'argon2'
import { jwtGenerator } from '../utils/jwtGenerate.js'
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
    const saveRet = await user.save()
    console.log(saveRet, 'data')
    res.send({ code: 200, message: '注册成功', data: saveRet })
}

/**
 * 登录接口处理函数
 * @param {any} req 
 * @param {*} res 
 * @param {*} next 
 */
export const handleLogin = async (req, res) => {
    // 查询用户
    const user = await userModel.findOne({ username: req.body.username })
    // 校验密码
    const result = await argon2.verify(user.password, req.body.password)

    if (!result) {
        return res.status(402).json({ code: 402, message: '密码错误' })
    }
    Reflect.deleteProperty(user, 'password')
    // 生成token
    const token = jwtGenerator({ email: user.email, id: user._id })
    res.status(200).json({ code: 200, token, message: '登录成功' })
}