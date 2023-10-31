import React from 'react';
import BreadcrumbBasicDemo from './basic';
import BreadcrumbWithIconDemo from './with-icon';
import BreadcrumbSeparatorDemo from './separator';
import BreadcrumbOverlayDemo from './overlay';
import BreadcrumbSeparatorComponentDemo from './separator-component';
import './index.css';

const BreadcrumbDemo = () => (
  <div className="breadcrumb-demo">
    <hr />
    <div id="components-breadcrumb-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <BreadcrumbBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-breadcrumb-demo-with-icon">
      <h2>WithIcon 带有图标的</h2>
      <div className="code-box-demo">
        <BreadcrumbWithIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-breadcrumb-demo-separator">
      <h2>Separator 分隔符</h2>
      <div className="code-box-demo">
        <BreadcrumbSeparatorDemo />
      </div>
    </div>
    <hr />
    <div id="components-breadcrumb-demo-overlay">
      <h2>Overlay 带下拉菜单的面包屑</h2>
      <div className="code-box-demo">
        <BreadcrumbOverlayDemo />
      </div>
    </div>
    <hr />
    <div id="components-breadcrumb-demo-separator-component">
      <h2>SeparatorComponent 分隔符</h2>
      <div className="code-box-demo">
        <BreadcrumbSeparatorComponentDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default BreadcrumbDemo;
