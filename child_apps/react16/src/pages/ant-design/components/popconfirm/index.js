import React from 'react';
import PopconfirmBasicDemo from './basic';
import PopconfirmLocaleDemo from './locale';
import PopconfirmPlacementDemo from './placement';
import PopconfirmDynamicTriggerDemo from './dynamic-trigger';
import PopconfirmIconDemo from './icon';
import PopconfirmAsyncDemo from './async';
import PopconfirmPromiseDemo from './promise';
import './index.css';

const PopconfirmDemo = () => (
  <div className="popconfirm-demo">
    <hr />
    <div id="components-popconfirm-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <PopconfirmBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-popconfirm-demo-locale">
      <h2>Locale 国际化</h2>
      <div className="code-box-demo">
        <PopconfirmLocaleDemo />
      </div>
    </div>
    <hr />
    <div id="components-popconfirm-demo-placement">
      <h2>Placement 位置</h2>
      <div className="code-box-demo">
        <PopconfirmPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-popconfirm-demo-dynamic-trigger">
      <h2>DynamicTrigger 条件触发</h2>
      <div className="code-box-demo">
        <PopconfirmDynamicTriggerDemo />
      </div>
    </div>
    <hr />
    <div id="components-popconfirm-demo-icon">
      <h2>Icon 自定义 Icon 图标</h2>
      <div className="code-box-demo">
        <PopconfirmIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-popconfirm-demo-async">
      <h2>Async 异步关闭</h2>
      <div className="code-box-demo">
        <PopconfirmAsyncDemo />
      </div>
    </div>
    <hr />
    <div id="components-popconfirm-demo-promise">
      <h2>Promise 基于 Promise 的异步关闭</h2>
      <div className="code-box-demo">
        <PopconfirmPromiseDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default PopconfirmDemo;
