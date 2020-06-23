# 优化篇

1. 路由懒加载, 其中首页不进行懒加载, 打包到主包内，提升首屏渲染速度

```
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
```

2. import静态导入修改为动态导入进行代码拆分

```
// 静态导入 (statically import)
import html2canvas from 'html2canvas'
// 动态导入 (dynamic import)
import(/* webpackChunkName: "html2canvas" */ 'html2canvas').then(
  ({ default: html2canvas }) => {
    html2canvas(document.querySelector('.container'), {
       scale: window.devicePixelRatio,
       allowTaint: false,
       useCORS: true,
    }).then(canvas => {
       console.log(canvas.toDataURL('image/jpeg', 0.9))
    })
  }
)
```

3. prefetch/preload

```
import(/* webpackPrefetch: true */ 'Login');

import(/* webpackPreload: true */ 'Home');
```

4. Gzip配置(compression-webpack-plugin)

5. 首页loading / 骨架屏 / 预渲染

6. 删除console.log(terser-webpack-plugin)
```

```

7. bundle 打包分析(webpack-bundle-analyzer)

