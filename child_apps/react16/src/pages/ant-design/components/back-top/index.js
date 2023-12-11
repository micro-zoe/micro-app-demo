import React from 'react';
import BackTopBasicDemo from './basic';
import BackTopCustomDemo from './custom';
import './index.css';

const BackTopDemo = () => (
  <div className="back-top-demo">
    <hr />
    <div id="components-back-top-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <BackTopBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-back-top-demo-custom">
      <h2>Custom 自定义样式</h2>
      <div className="code-box-demo">
        <BackTopCustomDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default BackTopDemo;
