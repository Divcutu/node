import express from 'express'
import fs from 'node:fs'
import userRouter from './router/user.mjs'
import db from './db/index.js'
import { log } from 'node:console'
// import { MongoClient } from 'mongodb'

// mongoose.connect('mongodb://localhost:27017/Dxx')

// const db = mongoose.connection

const app = express()

const useConsole = (req, res, next) => {
  console.log(req.url)
  next()
}

app.get('/', async (req, res) => {
    const data = fs.readFileSync('./public/index.html')
    res.send(data.toString('utf-8'))
})

app.use(useConsole)

app.get('/api', async (req, res) => {
  db(async (client) => {
    const ret = await client.db('Dxx').collection('test').insertOne({ name: 'dxx' })
    console.log(ret)
  })
  // const list = db.test.find({ a: "dxx" })
  // console.log(list)
  res.end('ok')
})

// 通过use 给路由增加前缀
app.use('/user', userRouter)

// 有四个参数，第一个是err 一般用于全局捕获异常
app.use((err, req, res, next) => {
  if (err) {
    console.log(err)
    res.status(500).send('server error')
  } else {
    next()
  }
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})