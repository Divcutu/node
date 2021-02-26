var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use(async (req, res, next) => {
  console.log('before --> next')
  // next 为function 类型 await无效
  next()
  console.log('after --> next')
})
router.get('/', async function(req, res, next) {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('222')
      resolve()
    }, 3000)
  })
  res.send('respond with a resource');
  console.log(' --> ')
});

module.exports = router;
