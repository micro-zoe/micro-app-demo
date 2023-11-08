import React from 'react';
import LayoutBasicDemo from './basic';
import LayoutTopDemo from './top';
import LayoutTopSide2Demo from './top-side-2';
import LayoutTopSideDemo from './top-side';
import LayoutSideDemo from './side';
import LayoutCustomTriggerDemo from './custom-trigger';
import LayoutResponsiveDemo from './responsive';
import LayoutFixedDemo from './fixed';
import './index.css';

const LayoutDemo = () => (
  <div className="layout-demo">
    <hr />
    <div id="components-layout-demo-basic">
      <h2>Basic 基本结构</h2>
      <div className="code-box-demo">
        <LayoutBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-layout-demo-top">
      <h2>Top 上中下布局</h2>
      <div className="code-box-demo">
        <LayoutTopDemo />
      </div>
    </div>
    <hr />
    <div id="components-layout-demo-top-side-2">
      <h2>TopSide2 顶部-侧边布局-通栏</h2>
      <div className="code-box-demo">
        <LayoutTopSide2Demo />
      </div>
    </div>
    <hr />
    <div id="components-layout-demo-top-side">
      <h2>TopSide 顶部-侧边布局</h2>
      <div className="code-box-demo">
        <LayoutTopSideDemo />
      </div>
    </div>
    <hr />
    <div id="components-layout-demo-side">
      <h2>Side 侧边布局</h2>
      <div className="code-box-demo">
        <LayoutSideDemo />
      </div>
    </div>
    <hr />
    <div id="components-layout-demo-custom-trigger">
      <h2>CustomTrigger 自定义触发器</h2>
      <div className="code-box-demo">
        <LayoutCustomTriggerDemo />
      </div>
    </div>
    <hr />
    <div id="components-layout-demo-responsive">
      <h2>Responsive 响应式布局</h2>
      <div className="code-box-demo">
        <LayoutResponsiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-layout-demo-fixed">
      <h2>Fixed 固定头部</h2>
      <div className="code-box-demo">
        <LayoutFixedDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default LayoutDemo;
