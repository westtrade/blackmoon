// import path from 'path'
// import rupture from 'rupture'
// import nib from 'nib'
// import webpack from 'webpack'
//
// import HTMLWebpackPlugin from 'html-webpack-plugin'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import CleanWebpackPlugin from 'clean-webpack-plugin'
// import CompressionPlugin from 'compression-webpack-plugin'
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
// import ZopfliCompressionPlugin from 'zopfli-webpack-plugin'
// import BrotliCompressionPlugin from 'brotli-webpack-plugin'

const path = require('path')
const rupture = require('rupture')
const nib = require('nib')
const webpack = require('webpack')
//
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ZopfliCompressionPlugin = require('zopfli-webpack-plugin')
const BrotliCompressionPlugin = require('brotli-webpack-plugin')

const rulesGenerator = (mode = 'production') => {
	const isProduction = mode === 'production'
	return [
		// {
		// 	test: /\.jsx?$/,
		// 	loader: 'babel-loader',
		// 	exclude: /node_modules/,
		// },
		{
			test: /\.jsx?$/,
			loader: 'buble-loader',
			exclude: /node_modules/,
			options: {
				objectAssign: 'Object.assign',
				// transforms: { forOf: false },
				jsx: 'h',
			},
		},

		{
			test: /\.rs$/,
			use: {
				loader: 'rust-wasm-loader',
				options: {
					path: './dist',
					release: true,
				},
			},
		},

		{
			test: /\.(wasm|css|styl|s[ac]ss|less)/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader,
				},
				{
					loader: 'css-loader',
					options: {
						modules: true,
						camelCase: 'only',
						importLoaders: 3,
						// localIdentName: '[hash:base64:4]',
						localIdentName: isProduction
							? '[hash:base64:4]'
							: '[name]__[local]',
					},
				},
				'csso-loader',
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

		// {
		// 	test: /\.vue/,
		// 	loader: 'vue-loader',
		// },
	]
}

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
	entry: [path.resolve(__dirname, 'src/entry')],

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/',
	},

	plugins,

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
					compress: true,
					ecma: 6,
					mangle: true,
					extractComments: true,
					output: {
						comments: false,
					},
				},
				sourceMap: true,
			}),
		],

		splitChunks: {
			// include all types of chunks
			chunks: 'all',
		},
	},
	node: {
		fs: 'empty',
	},

	module: {},

	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		historyApiFallback: true,
		proxy: {
			'/wex/api': {
				target: 'https://wex.nz/',
				secure: false,
				pathRewrite: { '^/wex': '' },
				logLevel: 'debug',
				// onProxyRes(proxyRes) {
				// 	console.log(proxyRes);
				// }
				// onProxyReq(proxyReq) {
				// 	console.log(proxyReq);
				// }
			},
		},
	},

	resolve: {
		extensions: ['.js', '.json', '.styl', '.jsx', '.css'],
	},
}

module.exports = (env, argv) => {
	const { mode } = argv
	if (mode === 'production') {
		config.plugins.push(
			new ZopfliCompressionPlugin({
				algorithm: 'zopfli',
			}),
			new BrotliCompressionPlugin({
				asset: '[path].br[query]',
				test: /\.(js|css|html|svg)$/,
				threshold: 10240,
				minRatio: 0.8,
			})
		)
	}

	config.module = {
		rules: rulesGenerator(mode),
	}

	return config
}
