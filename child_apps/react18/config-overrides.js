/* config-overrides.js */

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function override(config, env) {
    // New config, e.g. config.plugins.push...
    delete config.output.publicPath
    // config.output.publicPath = undefined;
    return config
  },
}
