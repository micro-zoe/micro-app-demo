import React from 'react';
import TreeSelectBasicDemo from './basic';
import TreeSelectMultipleDemo from './multiple';
import TreeSelectTreeDataDemo from './tree-data';
import TreeSelectCheckableDemo from './checkable';
import TreeSelectAsyncDemo from './async';
import TreeSelectTreeLineDemo from './tree-line';
import TreeSelectPlacementDemo from './placement';
import TreeSelectStatusDemo from './status';
import './index.css';

const TreeSelectDemo = () => (
  <div className="tree-select-demo">
    <hr />
    <div id="components-tree-select-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <TreeSelectBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-select-demo-multiple">
      <h2>Multiple 多选</h2>
      <div className="code-box-demo">
        <TreeSelectMultipleDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-select-demo-tree-data">
      <h2>TreeData 从数据直接生成</h2>
      <div className="code-box-demo">
        <TreeSelectTreeDataDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-select-demo-checkable">
      <h2>Checkable 可勾选</h2>
      <div className="code-box-demo">
        <TreeSelectCheckableDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-select-demo-async">
      <h2>Async 异步加载</h2>
      <div className="code-box-demo">
        <TreeSelectAsyncDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-select-demo-tree-line">
      <h2>TreeLine 线性样式</h2>
      <div className="code-box-demo">
        <TreeSelectTreeLineDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-select-demo-placement">
      <h2>Placement 弹出位置</h2>
      <div className="code-box-demo">
        <TreeSelectPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-tree-select-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <TreeSelectStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TreeSelectDemo;
