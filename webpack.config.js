/**
 *
 */

const path = require('path');

module.exports = {
	mode: 'development',
	entry: './tmp/Main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)$/,
				exclude: /node_modules/,
				// loader: 'ts-loader',
			}
		]
	},

	// webpack にみつけさせるファイルの拡張子
	resolve: {
		extensions: [
			'.js',
			'.ts',
			'.tsx'
		]
	}
}
