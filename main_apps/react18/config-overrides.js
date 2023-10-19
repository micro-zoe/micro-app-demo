const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
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
}
