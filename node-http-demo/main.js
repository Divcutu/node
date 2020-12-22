const fs = require('fs')
const http = require('http')
const url = require('url')
const path = require('path')
const staticRouter = require('./router/static.router')
// http 服务
// const contentType = JSON.parse(fs.readFileSync('./configure/content-type.json'))
const serve = http.createServer().listen('7000')
serve.on('request', (request, response) => {
  staticRouter.static(request, response, '/static')
})