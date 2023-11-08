import React from 'react';
import TabsDeprecatedDemo from './deprecated';
import TabsBasicDemo from './basic';
import TabsDisabledDemo from './disabled';
import TabsCenteredDemo from './centered';
import TabsIconDemo from './icon';
import TabsSlideDemo from './slide';
import TabsExtraDemo from './extra';
import TabsSizeDemo from './size';
import TabsPositionDemo from './position';
import TabsCardDemo from './card';
import TabsEditableCardDemo from './editable-card';
import TabsCardTopDemo from './card-top';
import TabsCustomAddTriggerDemo from './custom-add-trigger';
import TabsCustomTabBarDemo from './custom-tab-bar';
import TabsCustomTabBarNodeDemo from './custom-tab-bar-node';
import './index.css';

const TabsDemo = () => (
  <div className="tabs-demo">
    <hr />
    <div id="components-tabs-demo-deprecated">
      <h2>Deprecated 基础用法（废弃的语法糖）</h2>
      <div className="code-box-demo">
        <TabsDeprecatedDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <TabsBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-disabled">
      <h2>Disabled 禁用</h2>
      <div className="code-box-demo">
        <TabsDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-centered">
      <h2>Centered 居中</h2>
      <div className="code-box-demo">
        <TabsCenteredDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-icon">
      <h2>Icon 图标</h2>
      <div className="code-box-demo">
        <TabsIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-slide">
      <h2>Slide 滑动</h2>
      <div className="code-box-demo">
        <TabsSlideDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-extra">
      <h2>Extra 附加内容</h2>
      <div className="code-box-demo">
        <TabsExtraDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-size">
      <h2>Size 大小</h2>
      <div className="code-box-demo">
        <TabsSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-position">
      <h2>Position 位置</h2>
      <div className="code-box-demo">
        <TabsPositionDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-card">
      <h2>Card 卡片式页签</h2>
      <div className="code-box-demo">
        <TabsCardDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-editable-card">
      <h2>EditableCard 新增和关闭页签</h2>
      <div className="code-box-demo">
        <TabsEditableCardDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-card-top">
      <h2>CardTop 卡片式页签容器</h2>
      <div className="code-box-demo">
        <TabsCardTopDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-custom-add-trigger">
      <h2>CustomAddTrigger 自定义新增页签触发器</h2>
      <div className="code-box-demo">
        <TabsCustomAddTriggerDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-custom-tab-bar">
      <h2>CustomTabBar 自定义页签头</h2>
      <div className="code-box-demo">
        <TabsCustomTabBarDemo />
      </div>
    </div>
    <hr />
    <div id="components-tabs-demo-custom-tab-bar-node">
      <h2>CustomTabBarNode 可拖拽标签</h2>
      <div className="code-box-demo">
        <TabsCustomTabBarNodeDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TabsDemo;
