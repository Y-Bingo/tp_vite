# [vite 插件开发](https://cn.vitejs.dev/guide/api-plugin.html#conditional-application)

受限制的 rollup 插件

## 简介

### 命名

-   rollup-plugin-xxx
-   vite-plugin-xxx

### hooks

服务启动时

-   options
-   buildStart

模块解析

-   resolved
-   load
-   transform

服务关闭时

-   buildEnd

-   closeBundle

moduleParsed 不会被调用
为了优化编译时速度不开放该 hook

### 条件

-   没有使用 moduleParsed 钩子
-   它在打包钩子和输出钩子之间没有强耦合

### vite 独有的钩子

-   config
-   configResolved
-   configureServe
-   transformIndexHtml
-   handleHotUpdate

## vite 插件执行时机

### 执行时机

-   pre
-   normal
-   post
