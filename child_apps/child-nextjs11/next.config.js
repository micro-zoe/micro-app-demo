/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'http://localhost:4002/app-nextjs' : 'http://localhost:4002/app-nextjs',
  basePath: '/app-nextjs',
  webpack: (config) => {
    Object.assign(config.output, {
      chunkLoadingGlobal: 'webpackJsonp_child_myapp', // webpack5.x
      // jsonpFunction: 'webpackJsonp_child_myapp', // webpack4.x
      globalObject: 'window',
    })
    return config
  },
}
