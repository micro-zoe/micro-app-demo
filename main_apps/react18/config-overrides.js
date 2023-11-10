/* config-overrides.js */
const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function override(config, env) {
    config.output.publicPath = '/main-react18/';
  // config.resolve.alias = Object.assign({}, config.resolve.alias, {
  //   "@micro-zoe/micro-app/polyfill":  path.join(__dirname, '../../../micro-app/polyfill'),
  //   "@micro-zoe/micro-app":  path.join(__dirname, '../../../micro-app/lib/index.esm.js'),
  // })

  // let i = 0, plugin
  // while (plugin = config.resolve.plugins[i]) {
  //   if (plugin instanceof ModuleScopePlugin) {
  //     config.resolve.plugins.splice(i, 1)
  //     continue
  //   }
  //   i++
  // }
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);
      // Change the dev server's config here...
      // Then return your modified config.
      config.client.overlay = false;
      return config;
    }
  }
}
