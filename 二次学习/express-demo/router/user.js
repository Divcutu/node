import express from 'express'

const router = express.Router()

// 用户
router.get('/login', (req, res) => {
    console.log(req.body, 'req.body')
    JSON.parse({})
    res.send('login')
})

router.post('/register', (req, res) => {
    console.log(req.body, 'req.body')
    res.send('register')
})

export default router