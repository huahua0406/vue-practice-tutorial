/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 组件自动化全局注册
import componentRegister from './componentRegister'
Vue.use(componentRegister)

// api全局注册到原型
import api from './api'
Vue.use(api)

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
