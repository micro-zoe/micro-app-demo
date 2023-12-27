import React from 'react';
import AnchorBasicDemo from './basic';
import AnchorHorizontalDemo from './horizontal'
import AnchorStaticDemo from './static';
import AnchorOnClickDemo from './on-click';
import AnchorCustomizeHighlightDemo from './customize-highlight';
import AnchorTargetOffsetDemo from './target-offset';
import AnchorOnChangeDemo from './on-change';
import AnchorHrefDemo from './href'
import './index.css';

const AnchorDemo: React.FC = () => (
  <div className="anchor-demo">
    <hr />
    <div id="components-anchor-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <AnchorBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-anchor-demo-basic">
      <h2>Horizontal 横向 Anchor</h2>
      <div className="code-box-demo">
        <AnchorHorizontalDemo />
      </div>
    </div>
    <hr />
    <div id="components-anchor-demo-static">
      <h2>Static 静态位置</h2>
      <div className="code-box-demo">
        <AnchorStaticDemo />
      </div>
    </div>
    <hr />
    <div id="components-anchor-demo-on-click">
      <h2>OnClick 自定义 onClick 事件</h2>
      <div className="code-box-demo">
        <AnchorOnClickDemo />
      </div>
    </div>
    <hr />
    <div id="components-anchor-demo-customize-highlight">
      <h2>CustomizeHighlight 自定义锚点高亮</h2>
      <div className="code-box-demo">
        <AnchorCustomizeHighlightDemo />
      </div>
    </div>
    <hr />
    <div id="components-anchor-demo-target-offset">
      <h2>TargetOffset 设置锚点滚动偏移量</h2>
      <div className="code-box-demo">
        <AnchorTargetOffsetDemo />
      </div>
    </div>
    <hr />
    <div id="components-anchor-demo-on-change">
      <h2>监听锚点链接改变</h2>
      <div className="code-box-demo">
        <AnchorOnChangeDemo />
      </div>
    </div>
    <hr />
    <div id="components-anchor-demo-href">
      <h2>替换历史中的 href</h2>
      <div className="code-box-demo">
        <AnchorHrefDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default AnchorDemo;
