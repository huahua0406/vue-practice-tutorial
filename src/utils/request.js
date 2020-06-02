import axios from 'axios'

// 创建axios 实例
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: 30 * 1000 // 请求超时时间
})

// http request 拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 这里可以自定义一些config 配置, 比如添加token
        const token = localStorage.getItem('token')
        token && (config.headers.Authorization = 'Bearer ' + token)
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截器即异常处理
axiosInstance.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    console.log('错误请求')
                    break
                case 401:
                    console.log('未授权，请重新登录')
                    break
                case 403:
                    console.log('拒绝访问')
                    break
                case 404:
                    console.log('请求错误,未找到该资源')
                    break
                case 405:
                    console.log('请求方法未允许')
                    break
                case 408:
                    console.log('请求超时')
                    break
                case 500:
                    console.log('服务器端出错')
                    break
                case 501:
                    console.log('网络未实现')
                    break
                case 502:
                    console.log('网络错误')
                    break
                case 503:
                    console.log('服务不可用')
                    break
                case 504:
                    console.log('网络超时')
                    break
                case 505:
                    console.log('http版本不支持该请求')
                    break
                default:
                    console.log(`连接错误${err.response.status}`)
            }
            return Promise.reject(err.response)
        } else {
            console.log('连接到服务器失败')
        }
    }
)

export default axiosInstance
