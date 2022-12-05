import { createApp } from 'vue';
// import App from './App.vue'
import App from './App.jsx';
import './style.css';

// logo
import logo from './assets/vue.svg';
console.log(logo);

// url
import test from './test?url';
console.log(test);

// raw
import raw from './test?raw';
console.log(raw);

// worker
// import Worker from './worker?worker';
// const worker = new Worker();
// worker.onmessage = e => {
// 	console.log(e);
// };

// json
import { version } from '../package.json';
console.log(version);

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

createApp(App).mount('#app');
