import express from 'express'

const router = express.Router()

// 用户
router.post('/buy', (req, res) => {
    console.log(req.body, 'req.body')
    res.send('buy')
})

router.post('/sell', (req, res) => {
    console.log(req.body, 'req.body')
    res.send('sell')
})