const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	resolve: {
		extensions: ['.jsx', '.ts', '.js'],
	},
	entry: path.resolve(__dirname, 'src', 'index.jsx'),
	module: {
		rules: [
			{
				test: /\.(js|ts|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
		hot: true,
		port: 4000,
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'),
		}),
		isDevelopment && new ReactRefreshWebpackPlugin(),
	].filter(Boolean),
}
