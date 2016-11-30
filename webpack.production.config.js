var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js') ; 

// extending dev config below

var stripLoader = {
	test:[/\.js$/,/\.es6$/],
	exclude:/node_modules/,
	loader:WebpackStrip.loader('console.log') 
}
devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
// to call it from command line
//webpack --config webpack.production.config.js -p