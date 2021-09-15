const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: !isProd ? 'http://localhost:4002/nextjs' : '线上地址',
  basePath: '/nextjs',
}
