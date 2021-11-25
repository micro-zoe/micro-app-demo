const path = require('path')

module.exports = {
  publicPath: '/main-vue3/',
  outputDir: 'main-vue3',
  productionSourceMap: false,
  devServer: {
    hot: false,
    disableHostCheck: true,
    port: 3000,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp-main-vue3`,
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@micro-zoe/micro-app", path.join(__dirname, '../../../micro-app/lib/index.esm.js'))
  },
}
