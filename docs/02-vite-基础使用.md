# vite 基础使用

## 创建 vue3 项目

## 创建 vue2 项目

## 创建 react 项目

## 使用 typescript

-   只编译，不校验
-   校验单独执行 `tsc --noEmit`

### isolatedModules

-   Exports of Non-Value Identifiers
-   Non-Module Files
-   References to const enum members

### type-client

```json
{
    ....
    types: ['vite/client']
}
```

## 静态文件处理

### image

```javascript
import logo from './assets/logo.svg';
...
render(<img src={logo} />); // /src/assets/vue.svg
```

### url

```javascript
// ./src/main.js
import test from './test?url';

console.log(test); // /src/test.js
```

### raw

```javascript
import raw from './test?raw';

console.log(raw);
// export function test() {
// 	console.log('test');
// }
```

### worker/ worker inline

```javascript
// ./worker.js
```

```javascript
// ./src/main.js
import Worker from './worker?worker';

const worker = new Worker();
worker.onmessage = e => {
	console.log(e);
};
```

### json

```javascript
// ./src/main.js
import { version } from '../package.json';

console.log(version); // 0.0.0
```

### webAssembly

```javascript
// ./src/main.js
import init from './test.wasm';

init().then(m => {
	m.test(); // test;
});
```

## 环境变量

Vite 在一个特殊的 **import.meta.env** 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：

|   模式   |           变量           | 类型    | 说明                                                        |
| :------: | :----------------------: | ------- | ----------------------------------------------------------- |
|   MODE   |   import.meta.env.MODE   | string  | 应用运行的模式                                              |
| BASE_URL | import.meta.env.BASE_URL | string  | 部署应用时的基本 URL。他由 base 配置项决定                  |
|   PROD   |   import.meta.env.PROD   | boolean | 应用是否运行在生产环境                                      |
|   DEV    |   import.meta.env.DEV    | boolean | 应用是否运行在开发环境 (永远与 import.meta.env.PROD 相反)。 |
|   SSR    |   import.meta.env.SSR    | boolean | 应用是否运行在 server 上                                    |

### 自定义 env

Vite 使用 dotenv 从你的 环境目录 中的下列文件加载额外的环境变量。[[doc]](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables)
