/**
 * 用来处理路由的控制器
 */


/**
 * 注册接口处理函数
 * @param {object} req 
 * @param {*} res 
 * @param {*} next 
 */
export const handleRegister = (req, res, next) => {


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