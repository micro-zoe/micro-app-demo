// const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // config.resolve.alias = Object.assign(config.resolve.alias, {
    //   "@micro-zoe/micro-app/polyfill":  path.join(__dirname, '../../../micro-app/polyfill'),
    //   "@micro-zoe/micro-app":  path.join(__dirname, '../../../micro-app/lib/index.esm.js'),
    // })
    return config
  },
}
