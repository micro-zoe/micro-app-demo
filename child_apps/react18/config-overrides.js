// config-overrides.js
module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  config.output.publicPath = 'auto';
  return config
}
