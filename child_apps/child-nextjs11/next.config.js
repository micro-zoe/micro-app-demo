const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'app-nextjs',
  assetPrefix: !isProd ? 'http://localhost:4002/app-nextjs' : '线上地址',
  basePath: '/app-nextjs',
}
