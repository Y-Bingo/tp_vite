# vite 高级应用

## 热更新

```javascript

```

## glob import

_vite_ 提供 _glob import_ 的功能，该功能来源于[ _fast-glob_](https://github.com/mrmlnc/fast-glob)

**在 vite 中基本使用**

```javascript
// a.js
// a.json
// b.js
// b.json

const globModules = import.meta.glob('./glob/*');

/**
 * globModules:
 * {
 *   "./glob/a.js": () => import("/src/glob/a.js")
 *   "./glob/a.json" :  () => import("/src/glob/a.json?import")
 *   "./glob/b.js":  () => import("/src/glob/b.js")
 *   "./glob/b.json": () => import("/src/glob/b.json?import")
 *   }
 */

console.log('globModules:', globModules);

/**
 * ./glob/a.js:a
 * ./glob/a.json:[object Object]
 * ./glob/b.js:b
 * ./glob/b.json:[object Object]
 */
Object.entries(globModules).forEach(([k, v]) => {
	v().then(m => console.log(k + ':' + m.default));
});
```

**编译结果**

```javascript
const globModules = /* #__PURE__ */ Object.assign({
	'./glob/a.js': () => import('/src/glob/a.js?t=1666423838843'),
	'./glob/a.json': () => import('/src/glob/a.json?import'),
	'./glob/b.js': () => import('/src/glob/b.js?t=1666423849524'),
	'./glob/b.json': () => import('/src/glob/b.json?import'),
});
```

## [依赖预构建](https://cn.vitejs.dev/guide/dep-pre-bundling.html#monorepos-and-linked-dependencies)

引用的第三方库编译后缓存到 _node_modules/.vite_ 目录下，提高编译性能。可通过修改 _optimizeDeps_ 配置来调整预编译策略

![图片](./assets/vite.cache.jpg)

#### commonJs to ESM

开发阶段中，Vite 的开发服务器将所有代码视为原生 ES 模块。因此，Vite 必须先将作为 CommonJS 或 UMD 发布的依赖项转换为 ESM。

#### bundle files together

Vite 将有许多内部模块的 ESM 依赖关系转换为单个模块，以提高后续页面加载性能

一些包将它们的 ES 模块构建作为许多单独的文件相互导入。例如，lodash-es 有超过 600 个内置模块！当我们执行 import { debounce } from 'lodash-es' 时，浏览器同时发出 600 多个 HTTP 请求！尽管服务器在处理这些请求时没有问题，但大量的请求会在浏览器端造成网络拥塞，导致页面的加载速度相当慢。

通过预构建 lodash-es 成为一个模块，我们就只需要一个 HTTP 请求了！

#### 缓存

**文件缓存**
Vite 会将预构建的依赖缓存到 _node_modules/.vite_。它根据几个源来决定是否需要重新运行预构建步骤:

-   _package.json_ 中的 _dependencies_ 列表
-   包管理器的 _lockfile_，例如 _package-lock.json, yarn.lock_，或者 _pnpm-lock.yaml_
-   可能在 _vite.config.js_ 相关字段中配置过的

只有在上述其中一项发生更改时，才需要重新运行预构建。

**浏览器缓存**

解析后的**依赖**请求会以 HTTP 头 _max-age=31536000,immutable_ 强缓存，以提高在开发时的页面重载性能。一旦被缓存，这些请求将永远不会再到达开发服务器
