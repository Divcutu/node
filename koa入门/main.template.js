const Koa = require('koa'),
      Router = require('koa-router'),
      render = require('koa-art-template'),
      path = require('path'),
      app = new Koa(),
      session = require('koa-session')
      router = new Router();

app.listen(7002)

app.keys = ['asd'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));

render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html'
})

router.get('/views', async (ctx) => {
  ctx.session.username = "dxx";
  ctx.cookies.set('name', 'dxx', {
    maxAge: 100 * 1000
  })
  await ctx.render('index.ejs')
})

router.get('/index', async (ctx) => {
  console.log('cookie', ctx.cookies.get('name'))
  console.log('session', ctx.session.username)
  ctx.body = 'asd'
})

app.use(router.routes()).use(router.allowedMethods())