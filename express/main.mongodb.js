// 实验一下mongodb

const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()


app.listen('7000')

app.get('/get', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, cilent) => {
    if (err) {
      console.log(err)
      cilent.close()
    } else {
      const db = cilent.db('dxx')
      let arr = db.collection('user').find({})
      arr.toArray((error, doc) => console.log(doc))
    }
  })
  res.send('111')
})
app.post('/post', (req, res) => {
  res.send('post --- ')
})