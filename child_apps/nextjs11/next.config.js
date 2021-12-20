const isProduction = process.env.NODE_ENV === 'production'

// 每个主应用的baseroute都是不同的，根据 BASE_ROUTE 动态设置baseroute的值
const baseRoute = process.env.BASE_ROUTE || '/app-nextjs11'
// 根据baseroute设置资源前缀
const assetPrefix = isProduction ? `http://www.micro-zoe.com:${process.env.PORT || '4002'}${baseRoute}` : `http://localhost:4002${baseRoute}`

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: baseRoute,
  assetPrefix,
  // 添加 assetPrefix 地址到 publicRuntimeConfig
  publicRuntimeConfig: {
    assetPrefix,
  },
  // 为不同的主应用构建单独的包
  distDir: process.env.DISTDIR || '.next',
  webpack: (config) => {
    Object.assign(config.output, {
      chunkLoadingGlobal: 'webpackJsonp_child_nextjs11', // webpack5
      // jsonpFunction: 'webpackJsonp_child_nextjs11', // webpack4
      globalObject: 'window',
    })
    return config
  },
}
