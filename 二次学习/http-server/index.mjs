import fs from 'node:fs'
import http from 'node:http'

const server = http.createServer()

server.listen(7000, () => {
  console.log('server is running on port 7000')
})

server.on('request', (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost:7000')
  if (pathname === '/') {
    res.end('hello world')
  } else {
    res.end('404 not found')
  }
})