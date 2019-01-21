const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
function resolvePath(dir) {
    return path.join(__dirname, '..', dir)
}
commonConfig = {
    entry: {
        app: [
            "babel-polyfill",
            resolvePath('src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: resolvePath('./dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"  //将代码放到服务器时访问静态文件
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            /*use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true //记录缓存，加快下次编译
                }
            }],*/
            include: resolvePath('src'),
            exclude: resolvePath('node_modules')
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
       /* new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolvePath('src/index.html')
        }),*/
       //优化缓存
        new webpack.HashedModuleIdsPlugin(),
        //优化缓存
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //优化缓存
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        })
    ],
    //取别名
    resolve: {
        alias: {
            pages: resolvePath('src/pages'),
            components: resolvePath('src/components'),
            router: resolvePath('src/router'),
            actions: resolvePath('src/redux/actions'),
            reducers: resolvePath('src/redux/reducers'),
            mock: resolvePath('mock')
        }
    }
};

module.exports = commonConfig;
