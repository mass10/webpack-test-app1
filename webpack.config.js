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

	// ターゲットとする ECMAScript バージョン
	// ・web が必要っぽいけど検証してない。
	// ・es5 を入れると arrow-functions がレガシー変換される。
	// ・target 属性があると browserslist は無視される。
	// target: ['web', 'es5'],

	// 実行時エラー。指定が正しくない模様。
	// browserlist: ['ie 5'],

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
