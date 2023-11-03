import React from 'react';
import CollapseBasicDemo from './basic';
import CollapseAccordionDemo from './accordion';
import CollapseMixDemo from './mix';
import CollapseBorderlessDemo from './borderless';
import CollapseCustomDemo from './custom';
import CollapseNoarrowDemo from './noarrow';
import CollapseExtraDemo from './extra';
import CollapseGhostDemo from './ghost';
import CollapseCollapsibleDemo from './collapsible';
import './index.css';

const CollapseDemo = () => (
  <div className="collapse-demo">
    <hr />
    <div id="components-collapse-demo-basic">
      <h2>Basic 折叠面板</h2>
      <div className="code-box-demo">
        <CollapseBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-accordion">
      <h2>Accordion 手风琴</h2>
      <div className="code-box-demo">
        <CollapseAccordionDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-mix">
      <h2>Mix 面板嵌套</h2>
      <div className="code-box-demo">
        <CollapseMixDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-borderless">
      <h2>Borderless 简洁风格</h2>
      <div className="code-box-demo">
        <CollapseBorderlessDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-custom">
      <h2>Custom 自定义面板</h2>
      <div className="code-box-demo">
        <CollapseCustomDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-noarrow">
      <h2>Noarrow 隐藏箭头</h2>
      <div className="code-box-demo">
        <CollapseNoarrowDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-extra">
      <h2>Extra 额外节点</h2>
      <div className="code-box-demo">
        <CollapseExtraDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-ghost">
      <h2>Ghost 幽灵折叠面板</h2>
      <div className="code-box-demo">
        <CollapseGhostDemo />
      </div>
    </div>
    <hr />
    <div id="components-collapse-demo-collapsible">
      <h2>Collapsible 可折叠触发区域</h2>
      <div className="code-box-demo">
        <CollapseCollapsibleDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default CollapseDemo;
