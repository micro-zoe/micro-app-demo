import React from 'react';
import PopoverBasicDemo from './basic';
import PopoverTriggerTypeDemo from './trigger-type';
import PopoverPlacementDemo from './placement';
import PopoverControlDemo from './control';
import PopoverArrowPointAtCenterDemo from './arrow-point-at-center';
import PopoverHoverWithClickDemo from './hover-with-click';
import './index.css';

const PopoverDemo = () => (
  <div className="popover-demo">
    <hr />
    <div id="components-popover-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <PopoverBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-popover-demo-trigger-type">
      <h2>TriggerType 三种触发方式</h2>
      <div className="code-box-demo">
        <PopoverTriggerTypeDemo />
      </div>
    </div>
    <hr />
    <div id="components-popover-demo-placement">
      <h2>Placement 位置</h2>
      <div className="code-box-demo">
        <PopoverPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-popover-demo-control">
      <h2>Control 从浮层内关闭</h2>
      <div className="code-box-demo">
        <PopoverControlDemo />
      </div>
    </div>
    <hr />
    <div id="components-popover-demo-arrow-point-at-center">
      <h2>ArrowPointAtCenter 箭头指向</h2>
      <div className="code-box-demo">
        <PopoverArrowPointAtCenterDemo />
      </div>
    </div>
    <hr />
    <div id="components-popover-demo-hover-with-click">
      <h2>HoverWithClick 悬停点击弹出窗口</h2>
      <div className="code-box-demo">
        <PopoverHoverWithClickDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default PopoverDemo;
