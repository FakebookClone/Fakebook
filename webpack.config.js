module.exports = {
	entry: {
		main: './public/app/fakebookApp.jsx'
	},
	output: {
		filename: 'bundle.js',
		path: './public/scripts'
	},
	devtool: 'sourcemap',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				loaders: ["style", "css", "sass"]
			}
		]
	}
};
