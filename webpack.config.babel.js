import path from 'path'
import rupture from 'rupture'
import nib from 'nib'

import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

const plugins = [
	new CleanWebpackPlugin(['./dist']),

	new MiniCssExtractPlugin({
		filename: '[name].[chunkhash].css',
		chunkFilename: '[id].css',
	}),
	new HTMLWebpackPlugin({
		template: './src/index.html',
	}),
]

const config = {
	entry: ['babel-polyfill', path.resolve(__dirname, 'src/entry')],

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/',
	},

	plugins,

	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
			},

			{
				test: /\.(css|styl|s[ac]ss|less)/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					{
						loader: 'stylus-loader',
						options: {
							use: [rupture(), nib()],
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},

			{
				test: /\.vue/,
				loader: 'vue-loader',
			},
		],
	},

	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		historyApiFallback: true,
		// proxy: {
		// 	'/api': 'http://',
		// },
	},

	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css', '.styl'],
	},
}

export default config
