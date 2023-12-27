import React from 'react';
import SkeletonBasicDemo from './basic';
import SkeletonComplexDemo from './complex';
import SkeletonActiveDemo from './active';
import SkeletonElementDemo from './element';
import SkeletonChildrenDemo from './children';
import SkeletonListDemo from './list';
import './index.css';

const SkeletonDemo = () => (
  <div className="skeleton-demo">
    <hr />
    <div id="components-skeleton-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <SkeletonBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-skeleton-demo-complex">
      <h2>Complex 复杂的组合</h2>
      <div className="code-box-demo">
        <SkeletonComplexDemo />
      </div>
    </div>
    <hr />
    <div id="components-skeleton-demo-active">
      <h2>Active 动画效果</h2>
      <div className="code-box-demo">
        <SkeletonActiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-skeleton-demo-element">
      <h2>Element 按钮/头像/输入框/图像/自定义节点</h2>
      <div className="code-box-demo">
        <SkeletonElementDemo />
      </div>
    </div>
    <hr />
    <div id="components-skeleton-demo-children">
      <h2>Children 包含子组件</h2>
      <div className="code-box-demo">
        <SkeletonChildrenDemo />
      </div>
    </div>
    <hr />
    <div id="components-skeleton-demo-list">
      <h2>List 列表</h2>
      <div className="code-box-demo">
        <SkeletonListDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default SkeletonDemo;
