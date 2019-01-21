const merge = require('webpack-merge');
const path = require('path')
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonConfig = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
function resolvePath(dir) {
    return path.join(__dirname, '..', dir)
}
const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
            })
        }]
    },
    plugins: [
        //1清除dist文件夹
        new CleanWebpackPlugin(['dist/*.*'],{
            root: path.resolve(__dirname, '../')  //返回当前所在的绝对路径的上一层
        }),
        // 2复制文件夹到目标位置
        new CopyWebpackPlugin([
            {
                from: resolvePath('public'),
                to:  resolvePath('dist/public')
            },
            {
                from: resolvePath('api'),
                to:  resolvePath('dist/api')
            }
        ]),
        //3.生成模板文件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolvePath('src/index.html')
        }),
        new UglifyJSPlugin(), //压缩js
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        //单独打包成css文件，与上面的 use: ExtractTextPlugin.extract个起使用
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]

};

module.exports = merge(commonConfig, publicConfig);
