const Koa = require('koa'),
      app = new Koa(),
      Router = require('@koa/router'),
      router = new Router(),
      views = require('koa-views'),
      static = require('koa-static');

/**
 * 定义views渲染
 */
const render = views('views', {
  extension: 'ejs'
})


/**
 * 定义静态文件目录 可定义多个
 */
app.use(static('./views'))



app.listen('7000', () => console.log('启动服务'))


app.use(render)

router.get('/news', (ctx) => {
  ctx.body = '<h1>news</h1>'
}).post('login', (ctx) => {
  console.log(ctx.query)
  ctx.body = 'ada'
})

router.get('/views', async (ctx) => {
  // 无后缀名默认渲染 全局配置
  console.log(ctx.state)
  await ctx.render('index', {
    state: 1
  })
})

router.get('/html', async (ctx) => {
  // 不在全局设置 渲染的文件加后缀名
  await ctx.render('views.html')
})

app.use(async (ctx, next) => {
  // koa的全局属性 任何路由中都可用
  ctx.state = {
    title: 'state'
  }

  await next()
})

app.use(router.routes()).use(router.allowedMethods())

