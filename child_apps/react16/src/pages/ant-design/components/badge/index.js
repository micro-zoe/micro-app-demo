import React from 'react';
import BadgeBasicDemo from './basic';
import BadgeNoWrapperDemo from './no-wrapper';
import BadgeOverflowDemo from './overflow';
import BadgeDotDemo from './dot';
import BadgeChangeDemo from './change';
import BadgeLinkDemo from './link';
import BadgeOffsetDemo from './offset';
import BadgeSizeDemo from './size';
import BadgeStatusDemo from './status';
import BadgeColorfulDemo from './colorful';
import BadgeRibbbonDemo from './ribbbon';
import './index.css';

const BadgeDemo = () => (
  <div className="badge-demo">
    <hr />
    <div id="components-badge-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <BadgeBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-no-wrapper">
      <h2>NoWrapper 独立使用</h2>
      <div className="code-box-demo">
        <BadgeNoWrapperDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-overflow">
      <h2>Overflow 封顶数字</h2>
      <div className="code-box-demo">
        <BadgeOverflowDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-dot">
      <h2>Dot 讨嫌的小红点</h2>
      <div className="code-box-demo">
        <BadgeDotDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-change">
      <h2>Change 动态</h2>
      <div className="code-box-demo">
        <BadgeChangeDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-link">
      <h2>Link 可点击</h2>
      <div className="code-box-demo">
        <BadgeLinkDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-offset">
      <h2>Offset 自定义位置偏移</h2>
      <div className="code-box-demo">
        <BadgeOffsetDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-size">
      <h2>Size 大小</h2>
      <div className="code-box-demo">
        <BadgeSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-status">
      <h2>Status 状态点</h2>
      <div className="code-box-demo">
        <BadgeStatusDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-colorful">
      <h2>Colorful 多彩徽标</h2>
      <div className="code-box-demo">
        <BadgeColorfulDemo />
      </div>
    </div>
    <hr />
    <div id="components-badge-demo-ribbbon">
      <h2>Ribbbon 缎带</h2>
      <div className="code-box-demo">
        <BadgeRibbbonDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default BadgeDemo;
