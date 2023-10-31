import React from 'react';
import AffixBasicDemo from './basic';
import AffixOnChangeDemo from './on-change';
import AffixTargetDemo from './target';
import './index.css';

const AffixDemo = () => (
  <div className="affix-demo">
    <hr />
    <div id="components-affix-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <AffixBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-affix-demo-on-change">
      <h2>OnChange 固定状态改变的回调</h2>
      <div className="code-box-demo">
        <AffixOnChangeDemo />
      </div>
    </div>
    <hr />
    <div id="components-affix-demo-target">
      <h2>Target 滚动容器</h2>
      <div className="code-box-demo">
        <AffixTargetDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default AffixDemo;
