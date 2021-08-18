module.exports = {
  publicPath: '/',
  outputDir: 'vue3',
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 5000,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  lintOnSave: false,
  // 自定义webpack配置
  configureWebpack: {
    output: {
      jsonpFunction: `webpackJsonp-base-vue3`,
    }
  },
}
