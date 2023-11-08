import React from 'react';
import GridBasicDemo from './basic';
import GridGutterDemo from './gutter';
import GridOffsetDemo from './offset';
import GridSortDemo from './sort';
import GridFlexDemo from './flex';
import GridFlexAlignDemo from './flex-align';
import GridFlexOrderDemo from './flex-order';
import GridFlexStretchDemo from './flex-stretch';
import GridResponsiveDemo from './responsive';
import GridResponsiveMoreDemo from './responsive-more';
import GridPlaygroundDemo from './playground';
import GridUseBreakpointDemo from './use-breakpoint';
import './index.css';

const GridDemo = () => (
  <div className="grid-demo">
    <hr />
    <div id="components-grid-demo-basic">
      <h2>Basic 基础栅格</h2>
      <div className="code-box-demo">
        <GridBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-gutter">
      <h2>Gutter 区块间隔</h2>
      <div className="code-box-demo">
        <GridGutterDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-offset">
      <h2>Offset 左右偏移</h2>
      <div className="code-box-demo">
        <GridOffsetDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-sort">
      <h2>Sort 栅格排序</h2>
      <div className="code-box-demo">
        <GridSortDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-flex">
      <h2>Flex 排版</h2>
      <div className="code-box-demo">
        <GridFlexDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-flex-align">
      <h2>FlexAlign 对齐</h2>
      <div className="code-box-demo">
        <GridFlexAlignDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-flex-order">
      <h2>FlexOrder 排序</h2>
      <div className="code-box-demo">
        <GridFlexOrderDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-flex-stretch">
      <h2>FlexStretch Flex 填充</h2>
      <div className="code-box-demo">
        <GridFlexStretchDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-responsive">
      <h2>Responsive 响应式布局</h2>
      <div className="code-box-demo">
        <GridResponsiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-responsive-more">
      <h2>ResponsiveMore 其他属性的响应式</h2>
      <div className="code-box-demo">
        <GridResponsiveMoreDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-playground">
      <h2>Playground 栅格配置器</h2>
      <div className="code-box-demo">
        <GridPlaygroundDemo />
      </div>
    </div>
    <hr />
    <div id="components-grid-demo-use-breakpoint">
      <h2>UseBreakpoint useBreakpoint Hook</h2>
      <div className="code-box-demo">
        <GridUseBreakpointDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default GridDemo;
