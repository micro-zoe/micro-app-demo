import React from 'react';
import TooltipBasicDemo from './basic';
import TooltipPlacementDemo from './placement';
import TooltipArrowPointAtCenterDemo from './arrow-point-at-center';
import TooltipColorfulDemo from './colorful';
import './index.css';

const TooltipDemo = () => (
  <div className="tooltip-demo">
    <hr />
    <div id="components-tooltip-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <TooltipBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-tooltip-demo-placement">
      <h2>Placement 位置</h2>
      <div className="code-box-demo">
        <TooltipPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-tooltip-demo-arrow-point-at-center">
      <h2>ArrowPointAtCenter 箭头指向</h2>
      <div className="code-box-demo">
        <TooltipArrowPointAtCenterDemo />
      </div>
    </div>
    <hr />
    <div id="components-tooltip-demo-colorful">
      <h2>Colorful 多彩文字提示</h2>
      <div className="code-box-demo">
        <TooltipColorfulDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TooltipDemo;
