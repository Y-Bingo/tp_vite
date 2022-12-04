(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	function funcA() {
		console.log('funcA');
	}

	var name = "rollup";
	var version = "1.0.0";
	var main = "index.js";
	var scripts = {
		test: "echo \"Error: no test specified\" && exit 1",
		build: "rollup -c ./rollup.config.js"
	};
	var author = "";
	var license = "ISC";
	var description = "";
	var dependencies = {
		"@rollup/plugin-json": "^5.0.1",
		rollup: "^3.2.5"
	};
	var pkg = {
		name: name,
		version: version,
		main: main,
		scripts: scripts,
		author: author,
		license: license,
		description: description,
		dependencies: dependencies
	};

	console.lg(pkg);

	console.log('hello Rollup');

	funcA();

}));
