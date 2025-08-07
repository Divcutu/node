# express

### 知识点

1. express 中间件  

    + 中间件会根据代码注册顺序来决定是否执行。比如 `use` 在`get` 之后，则请求这个`get`方法时就不会执行中间件。 就如以下艾玛。执行get时不会执行`useConsole`方法
       ```js
        const useConsole = (req, res, next) => {
            console.log(req.url)
            next()
        }

        app.get('/', async (req, res) => {
            console.log(req)
            const data = fs.readFileSync('./public/index.html')
            res.send(data.toString('utf-8'))
        })

        app.use(useConsole)

        app.post('/api', async (req, res) => {
            const list = db.test.find({ a: "dxx" })
            console.log(list)
            res.end(list)
        })
       ```

    + 中间件可以传递 `next` 方法，当调用 `next` 方法时，会执行下一个中间件，如果没有下一个中间件，则执行 `next` 方法会报错

    + 中间件若传入四个参数，则第一个参数为 `err`，第二个参数为 `req`，第三个参数为 `res`，第四个参数为 `next`，这种中间件称为 `error handler`，当发生错误时，会执行这个中间件
        ```js
            app.use((err, req, res, next) => {
            if (err) {
                console.log(err)
                res.status(500).send('server error')
            } else {
                next()
            }
            })
        ```

    + 通过`use`给路由增加前缀
        ```js
            // 通过use 给路由增加前缀
            app.use('/user', userRouter)

        ```
    
    + 通过`app.all` 可以获取到所有方法的请求

2. express 路由
3. express 模板引擎
4. express 静态资源
5. express 跨域
6. express 文件上传
7. express 数据库
8. express 日志
9. express 安全
10. express 性能优化
11. express 部署