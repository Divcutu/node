const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

// 定义存储在哪里 如果省略的话会存储在内存 或者通过MemoryStorage定义存在内存中
const storage = multer.diskStorage({
  // 定义存储地址
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// 文件是否上传的条件 若通过 则上传 添加到req中。 若不通过 则不上传，不添加到req.file中
const filter = (req, file, cb) => {
  console.log(file)
  let extname = path.extname(file.originalname)
  if (extname.includes('jpg') || extname.includes('svg') || extname.includes('png')) cb(null, true)
  else cb(null, false)
}

// 实例化multer
const upload = multer({storage, fileFilter: filter})

// 单文件上传
router.post('/img', upload.single('img'), (req, res) => {
  console.log(req.body,req.file)
  res.end('img')
})
// 多文件上传 array
router.post('/imgs-array', upload.array('imgs', 10), (req, res) => {
  console.log('array',req.files)
  res.end('imgs')
})
// 多文件上传
router.post('/imgs-files', upload.fields([
  {name: 'imgs', maxCount: 3},
  {name: 'files', maxCount: 10}
]), (req, res) => {
  console.log('files',req.file)
  res.end('files')
})

module.exports = router