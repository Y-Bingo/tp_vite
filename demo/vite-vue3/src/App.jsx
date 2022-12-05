import '@styles/index.css';
import { defineComponent } from 'vue';

import logo from './assets/vue.svg';

export default defineComponent({
	setup() {
		return () => {
			return (
				<>
					<div class="root"> Hello vue3 jsx vite !!!</div>
					<img src={logo}></img>
				</>
			);
		};
	},
});
