var path = require('path');
module.exports = {
	context:path.resolve('js'),
	entry:["./utils","./app"],
	output:{
		path:path.resolve('build/js/'),
		publicPath:'/public/assets/js/',
		filename:"bundle.js"
	},
	devServer:{
		contentBase:'public'
	},
	//watch:true,
	module:{
		/*preLoaders:[{
			test:/.js$/,
			exclude:/node_modules/,
			loader:"jshint-loader"
		}],*/
		loaders:[{
			test:/\.es6$/,
			exclude:/node_modules/,
			loader:"babel-loader"
		}]
	},
	jshint:{
		emitErrors: false,
		failOnHint: false
	},
	resolve:{
		extensions:["",".js",".es6"]
	}
}