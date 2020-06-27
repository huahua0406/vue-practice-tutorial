
/**
 *  自动化导入api模块
 */

const apiContext = require.context('./', false, /\.js$/)
const api = {}

apiContext.keys().forEach(key => {
    // if (key === './index.js') return
    const apiKey = key.replace(/\.\/|\.js/, '')
    const apiObj = apiContext(key).default || apiContext(key)
    if (apiKey.startsWith('index')) return
    api[apiKey] = apiObj
})
console.log(api)

export default {
    install (Vue) {
        Vue.prototype.$api = api
    }
}
