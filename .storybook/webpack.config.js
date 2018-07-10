const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(css|styl)$/,
				loaders: ['style-loader', 'css-loader', 'stylus-loader'],
				include: path.resolve(__dirname, '../'),
			},
		],
	},

	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css', '.styl'],
	},
}
