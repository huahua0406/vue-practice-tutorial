// 生产环境  _import_production.js
module.exports = file => () => import('@/views/' + file + '.vue')
