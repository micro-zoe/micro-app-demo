module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: 4010,
    open: false,
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

  },
}
