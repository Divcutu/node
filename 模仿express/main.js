var http = require('http');
let app = require('./app')
const url = require('url')

const serve = http.createServer()
serve.listen(7000)
serve.on('request', app)

app.get('/aaa', (req, res) => {
  let a = url.parse(req.url)
  console.log(req.url)
  res.end('aaaa')
})
app.post('/aaa', (req, res) => {
  console.log(req.params)
  res.end('postaaa')
})
console.log(app.get)