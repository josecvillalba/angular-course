var common = require('./webpack.common.js');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserJSPlugin = require('terser-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        filename: 'typechess.min.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.min.css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'TypeChess',
            version: 'Production',
            template: './src/index.html',
            filename: './index.html' //relative to root of the output path
        })
    ]
});
//# sourceMappingURL=webpack.prod.js.map