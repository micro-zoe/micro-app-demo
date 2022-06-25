const isProduction = process.env.NODE_ENV === 'production'

const port = parseInt(process.env.PORT, 10) || 4003
const basePath = '/nuxtjs2'

// 设置资源前缀，用于补全静态资源地址
const assetPrefix = isProduction ? `http://www.micro-zoe.com:${port}${basePath}` : `http://localhost:${port}${basePath}`

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

  // 设置基础路由
  router: {
    base: basePath,
  },

  telemetry: false,
}
