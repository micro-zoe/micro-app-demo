import React from 'react';
import CardBasicDemo from './basic';
import CardBorderLessDemo from './border-less';
import CardSimpleDemo from './simple';
import CardFlexibleContentDemo from './flexible-content';
import CardInColumnDemo from './in-column';
import CardLoadingDemo from './loading';
import CardGridCardDemo from './grid-card';
import CardInnerDemo from './inner';
import CardTabsDemo from './tabs';
import CardMetaDemo from './meta';
import './index.css';

const CardDemo = () => (
  <div className="card-demo">
    <hr />
    <div id="components-card-demo-basic">
      <h2>Basic 典型卡片</h2>
      <div className="code-box-demo">
        <CardBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-border-less">
      <h2>BorderLess 无边框</h2>
      <div className="code-box-demo">
        <CardBorderLessDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-simple">
      <h2>Simple 简洁卡片</h2>
      <div className="code-box-demo">
        <CardSimpleDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-flexible-content">
      <h2>FlexibleContent 更灵活的内容展示</h2>
      <div className="code-box-demo">
        <CardFlexibleContentDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-in-column">
      <h2>InColumn 栅格卡片</h2>
      <div className="code-box-demo">
        <CardInColumnDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-loading">
      <h2>Loading 预加载的卡片</h2>
      <div className="code-box-demo">
        <CardLoadingDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-grid-card">
      <h2>GridCard 网格型内嵌卡片</h2>
      <div className="code-box-demo">
        <CardGridCardDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-inner">
      <h2>Inner 内部卡片</h2>
      <div className="code-box-demo">
        <CardInnerDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-tabs">
      <h2>Tabs 带页签的卡片</h2>
      <div className="code-box-demo">
        <CardTabsDemo />
      </div>
    </div>
    <hr />
    <div id="components-card-demo-meta">
      <h2>Meta 支持更多内容配置</h2>
      <div className="code-box-demo">
        <CardMetaDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default CardDemo;
