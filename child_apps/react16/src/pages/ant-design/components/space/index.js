import React from 'react';
import SpaceBaseDemo from './base';
import SpaceVerticalDemo from './vertical';
import SpaceSizeDemo from './size';
import SpaceAlignDemo from './align';
import SpaceCustomizeDemo from './customize';
import SpaceWrapDemo from './wrap';
import SpaceSplitDemo from './split';
import SpaceCompactDemo from './compact';
import SpaceCompactButtonsDemo from './compact-buttons';
import SpaceCompactButtonVerticalDemo from './compact-button-vertical';
import './index.css';

const SpaceDemo = () => (
  <div className="space-demo">
    <hr />
    <div id="components-space-demo-base">
      <h2>Base 基本用法</h2>
      <div className="code-box-demo">
        <SpaceBaseDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-vertical">
      <h2>Vertical 垂直间距</h2>
      <div className="code-box-demo">
        <SpaceVerticalDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-size">
      <h2>Size 间距大小</h2>
      <div className="code-box-demo">
        <SpaceSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-align">
      <h2>Align 对齐</h2>
      <div className="code-box-demo">
        <SpaceAlignDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-customize">
      <h2>Customize 自定义尺寸</h2>
      <div className="code-box-demo">
        <SpaceCustomizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-wrap">
      <h2>Wrap 自动换行</h2>
      <div className="code-box-demo">
        <SpaceWrapDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-split">
      <h2>Split 分隔符</h2>
      <div className="code-box-demo">
        <SpaceSplitDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-compact">
      <h2>Compact 紧凑布局组合</h2>
      <div className="code-box-demo">
        <SpaceCompactDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-compact-buttons">
      <h2>CompactButtons Button 紧凑布局</h2>
      <div className="code-box-demo">
        <SpaceCompactButtonsDemo />
      </div>
    </div>
    <hr />
    <div id="components-space-demo-compact-button-vertical">
      <h2>CompactButtonVertical 垂直方向紧凑布局</h2>
      <div className="code-box-demo">
        <SpaceCompactButtonVerticalDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default SpaceDemo;
