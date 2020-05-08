## 使用

#### 命令

```bash
# 开发调试
$ npm run dev

# 服务端渲染应用部署

# 构建
$ npm run build

# 启动
$ npm start

# 停止
$ npm stop
```

#### 应用配置

修改 package.json，将 {app-name} 改成自己的：

```js
"scripts": {
  "stop": "pm2 stop {app-name}"
}
```

修改 processes.json，将 {app-name} 改成自己的：

```js
"apps": [
  {
    "name": "{app-name}"
  }
]
```

#### 修改 nuxt.config.js

添加全局 CSS：

```js
css: ["~/assets/styles/global/index.scss"];
```

> 参考：https://zh.nuxtjs.org/guide/configuration#css

CSS 提取到一个单独的 CSS 文件中：

```js
build: {
  extractCSS: true;
}
```

> 参考：https://zh.nuxtjs.org/api/configuration-build#extractcss

配置 Stylelint：

```js
stylelint: {
  files: ["assets/**/*.scss", "components/**/*.scss", "pages/**/*.scss"];
}
```

配置 CDN：

```js
build: {
  publicPath: "https://my-app.lrcdn.cn";
}
```

默认首页改为 pages/index/index.vue：

```js
router: {
  extendRoutes (routes, resolve) {
    routes.splice(routes.findIndex(item => item.name === 'index'), 1, {
      name: 'index',
      path: '/',
      component: resolve(__dirname, 'pages/index/index.vue')
    })

    routes.splice(routes.findIndex(item => item.name === '404'), 1, {
      name: '404',
      path: '*',
      component: resolve(__dirname, 'pages/404/index.vue')
    })
  }
}
```

> 参考：https://zh.nuxtjs.org/api/configuration-router/#extendroutes

#### 修改 stylelint.config.js

```js
module.exports = {
  extends: "stylelint-config-standard",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["each", "extend", "include"]
      }
    ]
  }
};
```

#### 修改 layouts/default.vue

去掉 <style>。

#### 页面目录规范

```
|-- page                      // 页面
|   |-- index.vue             // 页面入口
|   |-- styles                // 样式
|       |-- index.scss        // 样式入口
|       |-- images            // 样式引用图片
|   |-- images                // 页面引用图片
```

#### 组件目录规范

与页面目录规范一致。

## 参考

#### 文档

- [Nuxt.js 中文文档](https://zh.nuxtjs.org/)
- [Vue SSR 指南](https://ssr.vuejs.org/zh/)

#### 文章

- [Nuxt 开发经验分享，让你踩少点坑！](https://www.jianshu.com/p/840169ba92e6)

#### 视频

- [2018 千锋 Web 前端视频教程-VUE 服务器端渲染之 NUXT 实战](https://www.bilibili.com/video/av37561150/?p=1)
- [Nuxt.js 免费视频教程 开启 SSR 渲染](https://www.bilibili.com/video/av36353273/?p=1)
