const fs = require('fs')
module.exports = {
  css: {
    // 给 sass-loader 传递选项
    loaderOptions: {
      // @/ 是 src/ 的别名
      // 注意：在 sass-loader v7 中，这个选项名是 "data"
      sass: {
        // v8 //这个是我们自定义的scss文件
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixin.scss";
        `
      }
    }
  }
}
