
// 用来保存ge、post方法的对象,
let G = {
  GET: {},
  POST: {}
}

// 创建app
const app = function(req, res) {
  console.log(G)

  if (G[req.method][req.url]) {
    G[req.method][req.url](req, res)
  } else {
    console.log(req.url)
    throw new Error('无法识别的请求')

  }
}

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

module.exports = app