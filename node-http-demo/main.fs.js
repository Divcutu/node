const fs = require('fs')
const http = require('http')
const url = require('url')

// 创建输出流
// const writeStream = fs.createWriteStream('./static/out.txt')

// for (let i = 0; i< 500; i++) {
//   writeStream.write(`1111111111111111--------${i}\n`)
// }
// writeStream.end()
// writeStream.on('finish', (e) => {
//   console.warn('finish', e)
// })
// writeStream.on('close', () => {
//   console.log('完成')
// })

// 创建输入流
// const readStream = fs.createReadStream('./static/out.txt')
// let str = ''
// readStream.on('data', (data) => {
//   str += data
// })
// readStream.on('open', (e) => {
//   console.info('open', e)
// })
// readStream.on('end', (data) => {
//   console.info('end', data)
// })
// readStream.on('close', (e) => {
//   console.info('close', e)
//   console.log(str)
// })


// 管道流
// let writeStream = fs.createWriteStream('./static/background2.png')
// let readStream = fs.createReadStream('./static/background.png')

// readStream.pipe(writeStream)