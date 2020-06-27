const fs = require('fs')
const path = require('path')
const components = []
const files = fs.readdirSync(path.resolve(__dirname, '../src/assets/img/'))
files.forEach(function (item) {
    components.push(`require('@/assets/img/${item}')`)
})
const data = `/* eslint-disable */
let imgList = [${[...components]}]
module.exports = imgList;`

// 写入文件内容（如果文件不存在会创建一个文件）
fs.writeFile(path.resolve(__dirname, '../src/assets/js/imgList.js'), data, (err) => {
    if (err) {
        throw err
    }
    console.log('写入成功')
})

// https://juejin.im/post/5ed063c0f265da7717202472
