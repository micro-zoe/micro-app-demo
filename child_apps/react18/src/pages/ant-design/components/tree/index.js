import React from 'react';
import TreeBasicDemo from './basic';
import TreeBasicControlledDemo from './basic-controlled';
import TreeDraggableDemo from './draggable';
import TreeDynamicDemo from './dynamic';
import TreeSearchDemo from './search';
import TreeLineDemo from './line';
import TreeCustomizedIconDemo from './customized-icon';
import TreeDirectoryDemo from './directory';
import TreeSwitcherIconDemo from './switcher-icon';
import TreeVirtualScrollDemo from './virtual-scroll';
import './index.css';

const TreeDemo = () => (
  <div className="tree-demo">
    <hr />
    <div id="components-tree-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <TreeBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-basic-controlled">
      <h2>BasicControlled 受控操作示例</h2>
      <div className="code-box-demo">
        <TreeBasicControlledDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-draggable">
      <h2>Draggable 拖动示例</h2>
      <div className="code-box-demo">
        <TreeDraggableDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-dynamic">
      <h2>Dynamic 异步数据加载</h2>
      <div className="code-box-demo">
        <TreeDynamicDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-search">
      <h2>Search 可搜索</h2>
      <div className="code-box-demo">
        <TreeSearchDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-line">
      <h2>Line 连接线</h2>
      <div className="code-box-demo">
        <TreeLineDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-customized-icon">
      <h2>CustomizedIcon 自定义图标</h2>
      <div className="code-box-demo">
        <TreeCustomizedIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-directory">
      <h2>Directory 目录</h2>
      <div className="code-box-demo">
        <TreeDirectoryDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-switcher-icon">
      <h2>SwitcherIcon 自定义展开/折叠图标</h2>
      <div className="code-box-demo">
        <TreeSwitcherIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-demo-virtual-scroll">
      <h2>VirtualScroll 虚拟滚动</h2>
      <div className="code-box-demo">
        <TreeVirtualScrollDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TreeDemo;
