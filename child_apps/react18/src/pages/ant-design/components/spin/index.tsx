import React from 'react';
import SpinBasicDemo from './basic';
import SpinSizeDemo from './size';
import SpinInsideDemo from './inside';
import SpinNestedDemo from './nested';
import SpinTipDemo from './tip';
import SpinDelayAndDebounceDemo from './delay-and-debounce';
import SpinCustomIndicatorDemo from './custom-indicator';
import SpinFullscreenDemo from './fullscreen'
import './index.css';

const SpinDemo = () => (
  <div className="spin-demo">
    <hr />
    <div id="components-spin-demo-basic">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <SpinBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-spin-demo-size">
      <h2>Size 各种大小</h2>
      <div className="code-box-demo">
        <SpinSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-spin-demo-inside">
      <h2>Inside 容器</h2>
      <div className="code-box-demo">
        <SpinInsideDemo />
      </div>
    </div>
    <hr />
    <div id="components-spin-demo-nested">
      <h2>Nested 卡片加载中</h2>
      <div className="code-box-demo">
        <SpinNestedDemo />
      </div>
    </div>
    <hr />
    <div id="components-spin-demo-tip">
      <h2>Tip 自定义描述文案</h2>
      <div className="code-box-demo">
        <SpinTipDemo />
      </div>
    </div>
    <hr />
    <div id="components-spin-demo-delay-and-debounce">
      <h2>DelayAndDebounce 延迟</h2>
      <div className="code-box-demo">
        <SpinDelayAndDebounceDemo />
      </div>
    </div>
    <hr />
    <div id="components-spin-demo-custom-indicator">
      <h2>CustomIndicator 自定义指示符</h2>
      <div className="code-box-demo">
        <SpinCustomIndicatorDemo />
      </div>
    </div>
    <hr />
    <div id="components-spin-demo-fullscreen">
      <h2>Fullscreen 全屏</h2>
      <div className="code-box-demo">
        <SpinFullscreenDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default SpinDemo;
