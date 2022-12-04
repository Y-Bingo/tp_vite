// import React from 'react';
import packageJson from './package.json';
import testTxt from './test.txt';

function hello() {
	console.log('hello esbuild');
}

hello();
console.log(packageJson.version);
console.log(testTxt);

// console.log(React);
