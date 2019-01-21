const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config.js');
function resolvePath(dir) {
    return path.join(__dirname, '..', dir)
}
const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            resolvePath('src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]", "postcss-loader"]
        }]
    },
    devServer: {
        port: 8080,
        contentBase: resolvePath('./dist'),  //静态资源，如果不指定默认指向根目录
        historyApiFallback: true,  //404页面都访问index.html
        //host: '0.0.0.0', //允许外部服务器访问
        open: true,
        overlay: true, //编译器有错误时，在浏览器端全屏显示错误
        //color: true, //控制台是否启动颜色  目前不支持，没有此选项
        compress: true, //所有服务启用gzip压缩,将服务端与浏览器端通信速度加快
       /* proxy: { //纳入后端服务时需要,需要代理
            "/api/!*": "http://localhost:8080/"
        }*/
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);
