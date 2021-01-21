const express = require('express')
const ejs = require('ejs')
const app = express()
const fs = require('fs')

// 设置默认的模板引擎
app.set("view engine", "ejs");
// 设置默认文件目录 默认为views
app.set("views", "views");

app.listen(7000, _ => console.log('启动服务'))

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  // 不需要完整路径 会从配置的文件目录里找
  fs.readFile('./public/index.html', (err, data) => {
    res.render('index', {
      nameList: ['aa', 'bb', 'cc', 'dd', 'ee', 'ff'],
      index: data
    })
  })
})
