/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// TODO:组件自动化注册
// https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C

// 导入图片预加载方法以及图片列表
const imgList = require('./assets/js/imgList')
import { imgsPreloader } from './utils/imgPreloader'

(async () => {
  Vue.config.productionTip = false

  await imgsPreloader(imgList)
  // TODO: 自已在index.html添加loading
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})()
