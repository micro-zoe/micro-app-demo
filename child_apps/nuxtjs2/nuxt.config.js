const isProduction = process.env.NODE_ENV === 'production'

// 每个主应用的baseroute都是不同的，根据 BASE_ROUTE 动态设置baseroute的值
const baseRoute = process.env.BASE_ROUTE || '/app-nuxtjs2'
// 根据baseroute设置资源前缀
const assetPrefix = isProduction ? `http://www.micro-zoe.com:${process.env.PORT || '4003'}${baseRoute}` : `http://localhost:4003${baseRoute}`

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   publicPath: assetPrefix, // upload the content of .nuxt/dist/client directory to your CDN
  // },

  // 将 assetPrefix 写入环境变量，通过 process.env.assetPrefix 访问
  env: {
    assetPrefix,
  },

  // 为不同的主应用构建单独的包
  buildDir: process.env.DISTDIR || '.nuxt',

  // 设置基础路由
  router: {
    base: baseRoute,
  },

  telemetry: false,
}
