/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? 'http://localhost:4002/app-nextjs' : 'http://localhost:4002/app-nextjs',
  basePath: '/app-nextjs',
}
