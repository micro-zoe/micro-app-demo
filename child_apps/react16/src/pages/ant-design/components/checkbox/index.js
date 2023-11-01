import React from 'react';
import CheckboxBasicDemo from './basic';
import CheckboxDisabledDemo from './disabled';
import CheckboxControllerDemo from './controller';
import CheckboxGroupDemo from './group';
import CheckboxCheckAllDemo from './check-all';
import CheckboxLayoutDemo from './layout';
import './index.css';

const CheckboxDemo = () => (
  <div className="checkbox-demo">
    <hr />
    <div id="components-checkbox-demo-basic">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <CheckboxBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-checkbox-demo-disabled">
      <h2>Disabled 不可用</h2>
      <div className="code-box-demo">
        <CheckboxDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-checkbox-demo-controller">
      <h2>Controller 受控的 Checkbox</h2>
      <div className="code-box-demo">
        <CheckboxControllerDemo />
      </div>
    </div>
    <hr />
    <div id="components-checkbox-demo-group">
      <h2>Group Checkbox 组</h2>
      <div className="code-box-demo">
        <CheckboxGroupDemo />
      </div>
    </div>
    <hr />
    <div id="components-checkbox-demo-check-all">
      <h2>CheckAll 全选</h2>
      <div className="code-box-demo">
        <CheckboxCheckAllDemo />
      </div>
    </div>
    <hr />
    <div id="components-checkbox-demo-layout">
      <h2>Layout 布局</h2>
      <div className="code-box-demo">
        <CheckboxLayoutDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default CheckboxDemo;
