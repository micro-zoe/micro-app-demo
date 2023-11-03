import React from 'react';
import EmptyBasicDemo from './basic';
import EmptySimpleDemo from './simple';
import EmptyCustomizeDemo from './customize';
import EmptyConfigProviderDemo from './config-provider';
import EmptyDescriptionDemo from './description';
import './index.css';

const EmptyDemo = () => (
  <div className="empty-demo">
    <hr />
    <div id="components-empty-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <EmptyBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-empty-demo-simple">
      <h2>Simple 选择图片</h2>
      <div className="code-box-demo">
        <EmptySimpleDemo />
      </div>
    </div>
    <hr />
    <div id="components-empty-demo-customize">
      <h2>Customize 自定义</h2>
      <div className="code-box-demo">
        <EmptyCustomizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-empty-demo-config-provider">
      <h2>ConfigProvider 全局化配置</h2>
      <div className="code-box-demo">
        <EmptyConfigProviderDemo />
      </div>
    </div>
    <hr />
    <div id="components-empty-demo-description">
      <h2>Description 无描述</h2>
      <div className="code-box-demo">
        <EmptyDescriptionDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default EmptyDemo;
