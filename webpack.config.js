module.exports = {
	entry:["./utils","./app.js"],
	output:{
		filename:"bundle.js"
	},
	//watch:true,
	module:{
		preLoaders:[{
			test:/.js$/,
			exclude:/node_modules/,
			loader:"jshint-loader"
		}],
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