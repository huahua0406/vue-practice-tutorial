import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
/* eslint-disable */
Vue.use(VueRouter)
// TODO: 第一种写法
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// TODO: 第二种写法
// https://vuedose.tips/tips/naming-webpack-chunks-on-lazy-loaded-routes-in-vuejs/?utm_source=newsletter&utm_medium=email&utm_campaign=vuedose_34_naming_webpack_chunks_on_lazy_loaded_routes_in_vuejs&utm_term=2020-05-30
const routeOptions = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/detail/:id', name: 'Detail', props: true },
  { path: '/login', name: 'Login' },
  { path: '/demo1', name: 'Demo1' },
  { path: '/demo2/:id', name: 'Demo2', props: true},
  { path: '/demo3', name: 'Demo3'}
]

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.name}.vue`)
  }
})


const router = new VueRouter({
  routes
})

export default router
