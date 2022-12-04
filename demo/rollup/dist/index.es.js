/** Hello This is Banner!  **/
import react from 'react';

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
	"@rollup/plugin-alias": "^4.0.2",
	"@rollup/plugin-commonjs": "^23.0.2",
	"@rollup/plugin-json": "^5.0.1",
	"@rollup/plugin-node-resolve": "^15.0.1",
	"@rollup/plugin-terser": "^0.1.0",
	rollup: "^3.2.5"
};
var devDependencies = {
	react: "^18.2.0"
};
var pkg = {
	name: name,
	version: version,
	main: main,
	scripts: scripts,
	author: author,
	license: license,
	description: description,
	dependencies: dependencies,
	devDependencies: devDependencies
};

console.lg(pkg);
console.lg(react);

console.log('hello Rollup');

funcA();
