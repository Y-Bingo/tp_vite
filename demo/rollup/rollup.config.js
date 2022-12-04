// rollup config
// https://www.rollupjs.com/guide/command-line-reference

const json = require('@rollup/plugin-json');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const alias = require('@rollup/plugin-alias');

const mode = process.env.MODE;
const isLocal = mode === 'local';
console.log('Rollup Build: ', mode, isLocal);

const entry = './index';
const banner = '/** Hello This is Banner!  **/';

module.exports = [
	{
		input: entry,
		external: ['react'],
		plugins: [
			resolve(),
			commonjs(),
			json(),
			alias({
				entries: {
					module: './module.js',
				},
			}),
		],
		output: {
			// dir: './dist',
			file: 'dist/index.es.js',
			format: 'es',
			name: 'index.es',
			banner: banner,
		},
	},
	{
		input: entry,
		plugins: [resolve(), commonjs(), json()],
		output: {
			// dir: './dist',
			file: 'dist/index.umd.js',
			format: 'umd',
			name: 'index.umd',
			plugins: [terser()],
			banner: banner,
		},
	},
];
