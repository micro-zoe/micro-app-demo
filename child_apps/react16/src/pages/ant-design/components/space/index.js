import React from 'react';
import BaseDemo from './base';
import VerticalDemo from './vertical';
import SizeDemo from './size';
import AlignDemo from './align';
import CustomizeDemo from './customize';
import WrapDemo from './wrap';
import SplitDemo from './split';
import CompactDemo from './compact';
import CompactButtonsDemo from './compact-buttons';
import CompactButtonVerticalDemo from './compact-button-vertical';
import './index.css';

const SpaceDemo = () => (
  <div className="space-demo">
    <hr />
    <div id="components-space-demo-base">
      <h2>Base 基本用法</h2>
      <div className="code-box-demo">
        <BaseDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-vertical">
      <h2>Vertical 垂直间距</h2>
      <div className="code-box-demo">
        <VerticalDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-size">
      <h2>Size 间距大小</h2>
      <div className="code-box-demo">
        <SizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-align">
      <h2>Align 对齐</h2>
      <div className="code-box-demo">
        <AlignDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-customize">
      <h2>Customize 自定义尺寸</h2>
      <div className="code-box-demo">
        <CustomizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-wrap">
      <h2>Wrap 自动换行</h2>
      <div className="code-box-demo">
        <WrapDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-split">
      <h2>Split 分隔符</h2>
      <div className="code-box-demo">
        <SplitDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-compact">
      <h2>Compact 紧凑布局组合</h2>
      <div className="code-box-demo">
        <CompactDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-compact-buttons">
      <h2>CompactButtons Button 紧凑布局</h2>
      <div className="code-box-demo">
        <CompactButtonsDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-compact-button-vertical">
      <h2>CompactButtonVertical 垂直方向紧凑布局</h2>
      <div className="code-box-demo">
        <CompactButtonVerticalDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default SpaceDemo;
