import React from 'react';
import SwitchBasicDemo from './basic';
import SwitchDisabledDemo from './disabled';
import SwitchTextDemo from './text';
import SwitchSizeDemo from './size';
import SwitchLoadingDemo from './loading';
import './index.css';

const SwitchDemo = () => (
  <div className="switch-demo">
    <hr />
    <div id="components-switch-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <SwitchBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-switch-demo-disabled">
      <h2>Disabled 不可用</h2>
      <div className="code-box-demo">
        <SwitchDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-switch-demo-text">
      <h2>Text 文字和图标</h2>
      <div className="code-box-demo">
        <SwitchTextDemo />
      </div>
    </div>
    <hr />
    <div id="components-switch-demo-size">
      <h2>Size 两种大小</h2>
      <div className="code-box-demo">
        <SwitchSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-switch-demo-loading">
      <h2>Loading 加载中</h2>
      <div className="code-box-demo">
        <SwitchLoadingDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default SwitchDemo;
