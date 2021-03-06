import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// todo: 待验证
const _import = require('./_import_' + process.env.NODE_ENV)
// TODO:
// const asyncRouterMap = []
// const constantRouterMap = []
// TODO: https://juejin.im/post/5c106485e51d450e657571a6
// https://juejin.im/post/5c106485e51d450e657571a6#heading-1

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: _import('Login')
    },
    {
        path: '/detial',
        name: 'Detail',
        component: _import('Detail'),
        props: true
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/lifecycle',
        name: 'lifecycle',
        component: _import('List')
    },
    {
        path: '/comp',
        name: 'comp',
        component: _import('Comp')
    },
    {
        path: '/debounce',
        name: 'Debounce',
        component: _import('Debounce')
    },
    {
        path: '/search',
        name: 'search',
        component: _import('Search')
    },
    {
        path: '/table',
        name: 'table',
        component: _import('Table')
    },
    {
        path: '/dialog',
        name: 'dialog',
        component: _import('Dialog')
    },
    {
        path: '/sku-table',
        name: 'SkuTable',
        component: _import('SkuTable')
    },
    {
        path: '*',
        component: import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
    }
]

const router = new VueRouter({
    mode: 'history', // TODO开发环境hash 生产环境history
    // base: process.env.BASE_URL,
    routes,
    scrollBehavior: () => ({ y: 0 })
})

router.beforeEach((to, from, next) => {
    // beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {
        // 判断是否有标题
        document.title = to.meta.title
    }
    next() // 执行进入路由，如果不写就不会进入目标页
})

export default router
