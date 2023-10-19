/* config-overrides.js */

module.exports = function override(config, env) {
  config.output.publicPath = '/child/react18/';
  return config;
}
