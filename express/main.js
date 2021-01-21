const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()
const MongoStore = require('connect-mongo')(session);
app.listen('7000')

app.use(cookieParser('aaa'))

app.get('/login', (req, res) => {
  console.log('Cookie', req.cookies)
  // express会将其填入Response Header中的Set-Cookie，达到在浏览器中设置cookie的作用。
  // 注意 设置cookie为express自带api 而非CookieParser
  res.cookie('name', 'dxx', {
    maxAge: 600 * 1000,
    httpOnly: true,
    signed: true
  })
  /**
    domain：cookie在什么域名下有效，类型为String,。默认为网站域名
    expires: cookie过期时间，类型为Date。如果没有设置或者设置为0，那么该cookie只在这个这个session有效，即关闭浏览器后，这个cookie会被浏览器删除。
    httpOnly: 只能被web server访问，类型Boolean。
    maxAge: 实现expires的功能，设置cookie过期的时间，类型为String，指明从现在开始，多少毫秒以后，cookie到期。
    path: cookie在什么路径下有效，默认为'/'，类型为String
    secure：只能被HTTPS使用，类型Boolean，默认为false
    signed:使用签名，类型Boolean，默认为false。`express会使用req.secret来完成签名，需要cookie-parser配合使用`
   */

  //  res.clearCookie(name [, options]); 删除cookie 没有cookieparse
  //  req.headers.cookie 获取cookie 没有cookieparse
  res.send('get')
})
app.get('/logout', (req, res) => {
  // req.cookies 是通过 cookieparser封装的
  console.log('Cookie', req.cookies)
  console.log('signedCookie', req.signedCookies)
  res.send('get')
})


// session

/**
 *  session 中间件的配置参数：
    name: 设置cookie中，保存session的字段名称，默认为connect.sid
    store: session的存储方式，默认为存放在内存中，我们可以自定义redis等
    genid: 生成一个新的session_id时，默认为使用uid2这个npm包
    rolling: 每个请求都重新设置一个cookie，默认为false
    resave: 即使session没有被修改，也保存session值，默认为true
    saveUninitialized：强制未初始化的session保存到数据库
    secret: 通过设置的secret字符串，来计算hash值并放在cookie中，使产生的signedCookie防篡改
    cookie : 设置存放sessionid的cookie的相关选项
 */

/**
 *  注意 cookie的secure属性 将此设置为true时，如果浏览器没有使用HTTPS连接，客户端将不会将cookie发送回服务器
 *  secure：true是推荐的选项。 但是，它需要一个启用https的网站，即，安全cookie HTTPS是必需的。 
 *  如果设置了安全，并且您通过HTTP访问您的网站，则不会设置Cookie。
 *  如果您的node.js位于代理后面并且正在使用 secure：true，则需要在express中设置“trust proxy”：
 */
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 1000},
  store: new MongoStore({
    url: 'mongodb://127.0.0.1:27017/sessionShop',
    touchAfter: 600 * 1000
  })
}))


app.get('/session1', (req, res) => {
  req.session.asd = 'asd'
  res.send('get')
})

app.get('/session2', (req, res) => {
  console.log(req.session)
  res.send('get')
})