var http = require('http');
let app = require('./app')
const url = require('url')

const serve = http.createServer()
serve.listen(7000)
serve.on('request', app)

app.get('/aaa', (req, res) => {
  let { query } = req
  console.log(query)
  res.end(JSON.stringify(query))
})
app.post('/aaa', (req, res) => {
  console.log(req.body)
  let ret = JSON.stringify({
    code: 200,
    data: {
      ...req.body
    },
    message: '成功'
  })
  res.end(ret)
})