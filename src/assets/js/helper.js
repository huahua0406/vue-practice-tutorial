const fs = require('fs')
const path = require('path')
const components = []
const files = fs.readdirSync(path.resolve(__dirname, '../img/'))
files.forEach(function (item) {
  components.push(`require('@/assets/img/${item}')`)
})
const data = `/* eslint-disable */
let imgList = [${[...components]}]
module.exports = imgList;`
fs.writeFile(path.resolve(__dirname, './imgList.js'), data, (error) => {
  console.log(error)
})
// https://juejin.im/post/5ed063c0f265da7717202472
