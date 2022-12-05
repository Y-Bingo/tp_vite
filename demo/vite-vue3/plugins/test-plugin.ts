export default (enforce?: 'pre' | 'post') => {
	return {
		name: 'test',
		// enforce,
		// buildStart() {
		// 	console.log('buildStart: ', enforce);
		// },
		// // resolveId() {
		// // 	console.log('resolveID: ', enforce);
		// // },
		// load() {
		// 	console.log('load: ', enforce);
		// },

		configResolved(config) {
			console.log(config.resolve);
		},

		configureServer(server) {
            
        },
	};
};
