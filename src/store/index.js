import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

/** 自动化导入store模块 **/
const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys().forEach(filename => {
    const name = filename.replace(/\.\//, '').replace(/\.js$/, '')
    // console.log(name)
    modules[name] = files(filename).default || files(filename)
})
/***************/

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters,
    modules: {}
})
