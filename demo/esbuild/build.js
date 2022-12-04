// txt plugin
let txtPlugin = {
	name: 'txt',
	setup(build) {
		const fs = require('fs');
		// Intercept import paths called "env" so esbuild doesn't attempt
		// to map them to a file system location. Tag them with the "env-ns"
		// namespace to reserve them for this plugin.
		build.onResolve({ filter: /\.txt$/ }, args => ({
			path: args.path,
			namespace: 'txt',
		}));

		// Load paths tagged with the "env-ns" namespace and behave as if
		// they point to a JSON file containing the environment variables.
		build.onLoad({ filter: /\.*/, namespace: 'txt' }, async args => {
			let text = await fs.promises.readFile(args.path, 'utf-8');
			return {
				contents: JSON.stringify(text.split(/s+/)),
				loader: 'json',
			};
		});
	},
};

// esbuild
require('esbuild')
	.build({
		entryPoints: ['index.js'],
		bundle: true,
		outfile: 'dist.js',
		loader: {
			'.png': 'dataurl',
		},
		plugins: [txtPlugin],
	})
	.catch(() => process.exit(1));
