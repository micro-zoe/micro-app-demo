const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: !isProd ? 'http://localhost:4002/app-nextjs' : 'http://localhost:4002/app-nextjs',
  basePath: '/app-nextjs',
}
