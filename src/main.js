import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// TODO:组件自动化注册
// https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C

// 预加载图片
const imgList = require('./assets/imgList/imgList')
console.log(imgList)
for (const img of imgList) {
  const image = new Image()
  console.log(img)
  image.src = img
  image.onload = () => {
    console.log(11)
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
