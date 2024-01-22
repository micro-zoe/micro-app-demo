/* config-overrides.js */
const path = require('path')

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function override(config, env) {
    // New config, e.g. config.plugins.push...
    delete config.output.publicPath
    return config
  },
  paths: function(paths, env) {
    return Object.assign(paths, {
      appBuild: path.join(__dirname, '/react18'),
    })
  },
}
