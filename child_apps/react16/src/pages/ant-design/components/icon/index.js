import React from 'react';
import IconBasicDemo from './basic';
import IconTwoToneDemo from './two-tone';
import IconCustomDemo from './custom';
import IconIconfontDemo from './iconfont';
import IconScriptUrlDemo from './script-url';
import './index.css';

const IconDemo = () => (
  <div className="icon-demo">
    <hr />
    <div id="components-icon-demo-basic">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <IconBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-icon-demo-two-tone">
      <h2>TwoTone 多色图标</h2>
      <div className="code-box-demo">
        <IconTwoToneDemo />
      </div>
    </div>
    <hr />
    <div id="components-icon-demo-custom">
      <h2>Custom 自定义图标</h2>
      <div className="code-box-demo">
        <IconCustomDemo />
      </div>
    </div>
    <hr />
    <div id="components-icon-demo-iconfont">
      <h2>Iconfont 使用 iconfont.cn</h2>
      <div className="code-box-demo">
        <IconIconfontDemo />
      </div>
    </div>
    <hr />
    <div id="components-icon-demo-script-url">
      <h2>ScriptUrl 使用 iconfont.cn 的多个资源</h2>
      <div className="code-box-demo">
        <IconScriptUrlDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default IconDemo;
