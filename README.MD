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

## 项目结构

```
- build               webpack开发打包配置文件，包含开发环境、生产环境构建
- public              公共的一些样式文件，如字体、图片
- src                 项目源文件
  -components         项目中需要的自定义组件
  -pages              显示的view页面
  -redux              redux状态管理
  -router             项目路由管理文件
  -index.html         静态模板文件
  -index.js           项目入口文件
- .babelrc            babel语法转换配置文件
- .gitignore          git上传忽略项配置文件
- package.json        记录项目信息，脚本、两个环境的依赖文件
- postcss.config.js   定义js插件转换样式的工具
- README.MD           项目自述文件
```
