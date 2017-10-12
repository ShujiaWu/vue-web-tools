let express = require('express')
let router = express.Router()
let path = require('path')
let fs = require('fs')
let root = process.cwd()
var bodyParser = require('body-parser')

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

function getContent(name, req, res) {
  let fileContent;
  try{
    fileContent = fs.readFileSync(name,'utf-8')
    res.status(200).json(JSON.parse(fileContent))
  }catch (e){
    res.status(400).json({
      code: "Error",
      message: e.message
    })
  }
}

router.all('*', function(req, res, next){
  console.log('请求模拟数据:', req.method ,req.path)
  console.log('参数（Query）:', req.query)
  console.log('参数（Params）:', req.body)
  console.log('')

  if (req.path.indexOf('error') === -1) {
    next()
  } else {
    res.status(400).json({
      code: "Error",
      message: "错误"
    })
  }
})

// GET
router.get('*', function(req, res, next){
  let file = req.path.replace('/mock', '')
  file = path.join(root,`/src/mock/get${file}`)
  getContent(file, req, res)
})

// POST
router.post('*', function(req, res, next){
  let file = req.path.replace('/mock', '')
  file = path.join(root,`/src/mock/post${file}`)
  getContent(file, req, res)
})

// PUT
router.put('*', function(req, res, next){
  let file = req.path.replace('/mock', '')
  file = path.join(root,`/src/mock/put${file}`)
  getContent(file, req, res)
})

// DELETE
router.delete('*', function(req, res, next){
  let file = req.path.replace('/mock', '')
  file = path.join(root,`/src/mock/delete${file}`)
  getContent(file, req, res)
})

module.exports = router