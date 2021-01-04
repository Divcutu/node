const url = require('url')
const path = require('path')
const fs = require('fs')

// 用来保存ge、post方法的对象,
let G = {
  GET: {},
  POST: {},
  static: 'static'
}

/**
 * 创建app
 * @param {*} req 
 * @param {*} res 
 * 
 * post 传参通过监听 data 数据流来获取
 * get 传参通过url.parse queryString 参数为true来获取
 */
const app = function(req, res) {

  let URL = url.parse(req.url, true)
  let _url = URL.pathname
  req.query = URL.query || {}
  end(res)
  
  if (G[req.method][_url]) {
    let body = ''
    req.on('data', data => {
      body += data
    })
    req.on('end', () => {
      req.body = JSON.parse(body) || ''
      G[req.method][_url](req, res)
    })
  } else {
    static(req, res)
  }
}

// 注册app 的 get post 方法
app.get = function(url, callback) {
  if(G.GET[url]) {
    throw new Error('重复注册')
  } else {
    G.GET[url] = callback
  }
}
app.post = function(url, callback) {
  if(G.POST[url]) {
    throw new Error('重复注册')
  } else {
    G.POST[url] = callback
  }
}

app.static = function(static){
  G.static = static
}

// 返回请求的默认格式
function end(res){
  res.writeHead(200, {'charset': 'utf-8', 'Content-Type': 'application/json'})
}

// 处理静态文件的方法
// 提前读取到返回格式的文件
const content = JSON.parse(fs.readFileSync('./configure/content-type.json').toString())
function static(req, res) {
  let _path = path.join(G.static, url.parse(req.url).pathname)
  fs.readFile(`./${_path}`, (err, data) => {
    if(err) {
      res.writeHead(404, {'Content-Type': 'application/json', 'charset': 'utf-8'})
      res.end(JSON.stringify({code: 404, data: {}, message: '未找到对应文件'}))
    }
    else {
      res.writeHead(200, {'Content-Type': `${content[path.extname(_path)]}`, 'charset': 'utf-8'})
      res.end(data)
    }
  })
}

module.exports = app