const isProduction = process.env.NODE_ENV === 'production'

// 根据 BASE_ROUTE baseRoute 动态设置baseroute的值
const baseRoute  = process.env.BASE_ROUTE || '/app-nuxtjs'
// 根据basePath设置资源前缀
const assetPrefix = isProduction ? `http://localhost:4003${baseRoute}` : `http://localhost:4003${baseRoute}`

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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  env: {
    assetPrefix,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: assetPrefix,
  },
  router: {
    base: baseRoute,
  },
  telemetry: false,
}
