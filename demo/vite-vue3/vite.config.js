import vue from '@vitejs/plugin-vue';
import vuejs from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import testPlugin from './plugins/test-plugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vuejs(),
		// testPlugin('post'),
		testPlugin(),
		// testPlugin('pre')
	],
	resolve: {
		alias: {
			'@styles': '/src/styles',
		},
	},
});
