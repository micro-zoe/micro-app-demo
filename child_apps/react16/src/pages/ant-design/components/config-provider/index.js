import React from 'react';
import ConfigProviderLocaleDemo from './locale';
import ConfigProviderDirectionDemo from './direction';
import ConfigProviderSizeDemo from './size';
import ConfigProviderThemeDemo from './theme';
import './index.css';

const ConfigProviderDemo = () => (
  <div className="config-provider-demo">
    <hr />
    <div id="components-config-provider-demo-locale">
      <h2>Locale 国际化</h2>
      <div className="code-box-demo">
        <ConfigProviderLocaleDemo />
      </div>
    </div>
    <hr />
    <div id="components-config-provider-demo-direction">
      <h2>Direction 方向</h2>
      <div className="code-box-demo">
        <ConfigProviderDirectionDemo />
      </div>
    </div>
    <hr />
    <div id="components-config-provider-demo-size">
      <h2>Size 组件尺寸</h2>
      <div className="code-box-demo">
        <ConfigProviderSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-config-provider-demo-theme">
      <h2>Theme 全局样式</h2>
      <div className="code-box-demo">
        <ConfigProviderThemeDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default ConfigProviderDemo;
