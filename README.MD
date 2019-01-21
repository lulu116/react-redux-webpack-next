# 基于react-redux-webpack的升级版

## babel
```
* babel-core 调用babel的api进行转码
* babel-loader 加载babel
* babel-preset-es2015解析es6
* babel-preset-react 解析jsx
* babel-preset-stage-0 解析es7提案
* babel-preset-env 支持最新的js版本
```

## webpack-dev-server与react-hot-loader两者热更
```
* webpack-dev-server热更 即时刷新，状态保不住;由于react中有自己的jsx,HMR搞不定
* react-hot-loader热更，保存当前页状态
```

