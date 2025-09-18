/**
 * 用来处理路由的控制器
 */

import { useModel } from '../model/index.js'
/**
 * 注册接口处理函数
 * @param {object} req 
 * @param {*} res 
 * @param {*} next 
 */
export const handleRegister = async (req, res, next) => {
    // const result = await useModel.save(req.body)
    const user = new useModel(req.body)
    const ret = await user.save()
    console.log(ret)

    res.send('register')
}

/**
 * 登录接口处理函数
 * @param {any} req 
 * @param {*} res 
 * @param {*} next 
 */
export const handleLogin = (req, res, next) => {

    
    res.send('login')
}