const fs = require('fs')
const _path = require('path')

const contentType = JSON.parse(fs.readFileSync('./configure/content-type.json'))
exports.static = function(request, response, path = '/static') {
  if(request.url === '/') {
    // fs.readFile(``)
    let url = _path.join('./', path, 'index.html')
    fs.readFile(url, (err, data) => {
      response.writeHead(200, {'Content-type': contentType[_path.extname(url)], 'charset': 'utf-8'})
      if (err) {
        console.log(err)
        response.end('失败的请求，请稍后再试')
      } else {
        response.end(data)
      }
    })
  } else {
    let url = _path.join('./', path, request.url)
    response.writeHead(200, {'Content-type': contentType[_path.extname(url)], 'charset': 'utf-8'})
    fs.readFile(url, (err, data) => {
      if (err) {
        console.log(err)
        response.end('失败的请求，请稍后再试')
      } else {
        response.end(data)
      }
    })
  }
}