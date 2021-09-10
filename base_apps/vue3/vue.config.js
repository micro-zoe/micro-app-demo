module.exports = {
  publicPath: '/',
  outputDir: 'vue3',
  productionSourceMap: false,
  devServer: {
    hot: true,
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
      jsonpFunction: `webpackJsonp-base-vue3`,
    }
  },
}
