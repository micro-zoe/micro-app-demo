const isProduction = process.env.NODE_ENV === 'production'

const port = parseInt(process.env.PORT, 10) || 4002
const basePath = '/nextjs11'

// 设置资源前缀，用于补全静态资源地址
const assetPrefix = isProduction ? `http://www.micro-zoe.com:${port}${basePath}` : `http://localhost:${port}${basePath}`

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix,
  // 添加 assetPrefix 地址到 publicRuntimeConfig
  publicRuntimeConfig: {
    assetPrefix,
  },
  webpack: (config) => {
    Object.assign(config.output, {
      chunkLoadingGlobal: 'webpackJsonp_child_nextjs11', // webpack5
      // jsonpFunction: 'webpackJsonp_child_nextjs11', // webpack4
      globalObject: 'window',
    })
    return config
  },
}
