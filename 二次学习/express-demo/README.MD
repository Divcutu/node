# express

### 知识点

1. express 中间件  

    + 中间件会根据代码注册顺序来决定是否执行。比如 `use` 在`get` 之后，则请求这个`get`方法时就不会执行中间件。 就如以下代码。执行get时不会执行`useConsole`方法
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
            app.use('/user', userRouter) // 访问时需要加上/user前缀
            app.use(userRouter) // 访问时不需要加上/user前缀

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


12. 工程化知识点   

    + `process.env.NODE_ENV` 可以在命令中 显示指定, 如 `cross-env NODE_ENV=devlopment nodemon index.js`,其中cross-env是因为windows不支持`NODE_ENV=devlopment`这种写法。
    
    + ESM `import` 语法, 需要明确指出具体文件，比如`'./user/index.js'`，否则会报错。前端项目不需要是因为`webpack`、`vite`等工具会自动处理。

13. `express-validator`

    + `express-validator` 是一个用于验证请求参数的库，可以用于验证请求参数的类型、长度、格式等。它本质是对`validator.js`库做了包装，使得可以通过中间件的形式在`express`中使用。

14. `argon2` 加密算法，采用了**故意慢哈希**算法，使得破解密码的时间非常长，从而提高了安全性。相比**单向哈希+盐**（如： `MD5、SHA-1`）更安全可靠。

    + 单向哈希+盐 盐值本质就是一个随机生成的、足够长的字符串。它为每个密码都生成一份随机的，并拼接到密码上。再对密码+盐值进行哈希运算。这样即使两个密码相同，由于盐值不同，哈希值也不同。即使攻击者获取到了哈希值，由于不知道盐值，也无法通过哈希值反推密码。（但是面对GPU暴力破解时依然脆弱）

15. `jsonwebtoken` `node` 中使用最广泛的`jwt`库，用于生成和解析`jwt`。

16. `Multer` `node` 中使用最广泛的`multipart/form-data`解析库，用于处理文件上传。

17. 注意点：`__dirname`、`__filename__`  是 CommonJS 的一个全局变量，在 ES 模块中不可用. 可以使用 import.meta.url 来获取当前模块的文件 URL，然后结合 fileURLToPath 和 dirname 来获取 __dirname 的等效值