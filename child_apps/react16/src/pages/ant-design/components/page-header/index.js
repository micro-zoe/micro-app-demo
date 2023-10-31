import React from 'react';
import PageHeaderBasicDemo from './basic';
import PageHeaderGhostDemo from './ghost';
import PageHeaderBreadcrumbDemo from './breadcrumb';
import PageHeaderContentDemo from './content';
import PageHeaderActionsDemo from './actions';
import PageHeaderResponsiveDemo from './responsive';
import './index.css';

const PageHeaderDemo = () => (
  <div className="page-header-demo">
    <hr />
    <div id="components-page-header-demo-basic">
      <h2>Basic 标准样式</h2>
      <div className="code-box-demo">
        <PageHeaderBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-page-header-demo-ghost">
      <h2>Ghost 白底模式</h2>
      <div className="code-box-demo">
        <PageHeaderGhostDemo />
      </div>
    </div>
    <hr />
    <div id="components-page-header-demo-breadcrumb">
      <h2>Breadcrumb 带面包屑页头</h2>
      <div className="code-box-demo">
        <PageHeaderBreadcrumbDemo />
      </div>
    </div>
    <hr />
    <div id="components-page-header-demo-content">
      <h2>Content 组合示例</h2>
      <div className="code-box-demo">
        <PageHeaderContentDemo />
      </div>
    </div>
    <hr />
    <div id="components-page-header-demo-actions">
      <h2>Actions 多种形态的 PageHeader</h2>
      <div className="code-box-demo">
        <PageHeaderActionsDemo />
      </div>
    </div>
    <hr />
    <div id="components-page-header-demo-responsive">
      <h2>Responsive 响应式</h2>
      <div className="code-box-demo">
        <PageHeaderResponsiveDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default PageHeaderDemo;
