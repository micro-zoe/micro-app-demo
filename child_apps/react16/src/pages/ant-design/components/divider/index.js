import React from 'react';
import DividerHorizontalDemo from './horizontal';
import DividerWithTextDemo from './with-text';
import DividerPlainDemo from './plain';
import DividerVerticalDemo from './vertical';
import './index.css';

const DividerDemo = () => (
  <div className="divider-demo">
    <hr />
    <div id="components-divider-demo-horizontal">
      <h2>Horizontal 水平分割线</h2>
      <div className="code-box-demo">
        <DividerHorizontalDemo />
      </div>
    </div>
    <hr />
    <div id="components-divider-demo-with-text">
      <h2>WithText 带文字的分割线</h2>
      <div className="code-box-demo">
        <DividerWithTextDemo />
      </div>
    </div>
    <hr />
    <div id="components-divider-demo-plain">
      <h2>Plain 分割文字使用正文样式</h2>
      <div className="code-box-demo">
        <DividerPlainDemo />
      </div>
    </div>
    <hr />
    <div id="components-divider-demo-vertical">
      <h2>Vertical 垂直分割线</h2>
      <div className="code-box-demo">
        <DividerVerticalDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default DividerDemo;
