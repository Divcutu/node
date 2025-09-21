import { jwtVerify } from '../utils/jwtGenerate.js'

export const listController = async (req, res) => {
    console.log(req.headers.authorization, 'req')

    try {
        // 验证token
        const verifyRet = jwtVerify(req.headers.authorization)
        console.log(verifyRet, 'verifyRet')
        res.send({ code: 200, data: [{ name: '张三' }, { name: '李四' }] })
    } catch (err) {
        console.log(err)
        res.send({ code: 400, msg: 'token验证失败' })
    }

}