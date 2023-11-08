import React from 'react';
import TypographyBasicDemo from './basic';
import TypographyTitleDemo from './title';
import TypographyTextDemo from './text';
import TypographyInteractiveDemo from './interactive';
import TypographyEllipsisDemo from './ellipsis';
import TypographyEllipsisMiddleDemo from './ellipsis-middle';
import TypographySuffixDemo from './suffix';
import './index.css';

const TypographyDemo = () => (
  <div className="typography-demo">
    <hr />
    <div id="components-typography-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <TypographyBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-typography-demo-title">
      <h2>Title 标题组件</h2>
      <div className="code-box-demo">
        <TypographyTitleDemo />
      </div>
    </div>
    <hr />
    <div id="components-typography-demo-text">
      <h2>Text 文本与超链接组件</h2>
      <div className="code-box-demo">
        <TypographyTextDemo />
      </div>
    </div>
    <hr />
    <div id="components-typography-demo-interactive">
      <h2>Interactive 可交互</h2>
      <div className="code-box-demo">
        <TypographyInteractiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-typography-demo-ellipsis">
      <h2>Ellipsis 省略号</h2>
      <div className="code-box-demo">
        <TypographyEllipsisDemo />
      </div>
    </div>
    <hr />
    <div id="components-typography-demo-ellipsis-middle">
      <h2>EllipsisMiddle 省略中间</h2>
      <div className="code-box-demo">
        <TypographyEllipsisMiddleDemo />
      </div>
    </div>
    <hr />
    <div id="components-typography-demo-suffix">
      <h2>Suffix 后缀</h2>
      <div className="code-box-demo">
        <TypographySuffixDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TypographyDemo;
