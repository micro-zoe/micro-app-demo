import React from 'react';
import RadioBasicDemo from './basic';
import RadioDisabledDemo from './disabled';
import RadioRadiogroupDemo from './radiogroup';
import RadioRadiogroupMoreDemo from './radiogroup-more';
import RadioRadiogroupOptionsDemo from './radiogroup-options';
import RadioRadiobuttonDemo from './radiobutton';
import RadioRadiogroupWithNameDemo from './radiogroup-with-name';
import RadioSizeDemo from './size';
import RadioRadiobuttonSolidDemo from './radiobutton-solid';
import './index.css';

const RadioDemo = () => (
  <div className="radio-demo">
    <hr />
    <div id="components-radio-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <RadioBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-disabled">
      <h2>Disabled 不可用</h2>
      <div className="code-box-demo">
        <RadioDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-radiogroup">
      <h2>Radiogroup 单选组合</h2>
      <div className="code-box-demo">
        <RadioRadiogroupDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-radiogroup-more">
      <h2>RadiogroupMore Radio.Group 垂直</h2>
      <div className="code-box-demo">
        <RadioRadiogroupMoreDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-radiogroup-options">
      <h2>RadiogroupOptions Radio.Group 组合 - 配置方式</h2>
      <div className="code-box-demo">
        <RadioRadiogroupOptionsDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-radiobutton">
      <h2>Radiobutton 按钮样式</h2>
      <div className="code-box-demo">
        <RadioRadiobuttonDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-radiogroup-with-name">
      <h2>RadiogroupWithName 单选组合 - 配合 name 使用</h2>
      <div className="code-box-demo">
        <RadioRadiogroupWithNameDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-size">
      <h2>Size 大小</h2>
      <div className="code-box-demo">
        <RadioSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-radio-demo-radiobutton-solid">
      <h2>RadiobuttonSolid 填底的按钮样式</h2>
      <div className="code-box-demo">
        <RadioRadiobuttonSolidDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default RadioDemo;
