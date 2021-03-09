var common = require('./webpack.common.js');
var merge = require('webpack-merge');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 3000
    },
    devtool: 'eval-source-map',
    mode: 'development',
    output: {
        filename: 'typechess.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'TypeChess',
            version: 'Development',
            template: './src/index.html',
            filename: './index.html' //relative to root of the output path
        })
    ],
    watch: true
});
//# sourceMappingURL=webpack.dev.js.map