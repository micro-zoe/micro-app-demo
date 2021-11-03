const isProduction = process.env.NODE_ENV === 'production'

// basePath的值无法动态修改，每个主应用的值都是不同的
const basePath = process.env.BASE_ROUTE || '/app-nextjs'
// 根据basePath设置资源前缀
const assetPrefix = isProduction ? `http://localhost:4002${basePath}` : `http://localhost:4002${basePath}`

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix,
  basePath,
  publicRuntimeConfig: {
    assetPrefix, // 添加 assetPrefix 地址到 publicRuntimeConfig
  },
  webpack: (config) => {
    Object.assign(config.output, {
      chunkLoadingGlobal: 'webpackJsonp_child_myapp', // webpack5.x
      // jsonpFunction: 'webpackJsonp_child_myapp', // webpack4.x
      globalObject: 'window',
    })
    return config
  },
}
