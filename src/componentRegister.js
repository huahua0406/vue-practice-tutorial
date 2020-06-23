// vue全局注册组件
// 来源: https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C

function changeStr (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 *   require.context
 *   require.context(directory, useSubdirectories = false, regExp = /^.//)
 *   directory {String} -读取文件的路径
 *   useSubdirectories {Boolean} -是否遍历文件的子目录
 *   regExp {RegExp} -匹配文件的正则
 */

export default {
    install (Vue) {
        const requireComponent = require.context('./components', false, /\.vue$/)
        requireComponent.keys().forEach(fileName => {
            const componentName = changeStr(fileName.replace(/\.\//, '').replace(/\.vue$/, ''))
            Vue.component(
                componentName, requireComponent(fileName).default || requireComponent
            )
        })
    }
}
