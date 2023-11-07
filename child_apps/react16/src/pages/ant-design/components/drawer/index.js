import React from 'react';
import DrawerBasicRightDemo from './basic-right';
import DrawerPlacementDemo from './placement';
import DrawerExtraDemo from './extra';
import DrawerRenderInCurrentDemo from './render-in-current';
import DrawerFormInDrawerDemo from './form-in-drawer';
import DrawerUserProfileDemo from './user-profile';
import DrawerMultiLevelDrawerDemo from './multi-level-drawer';
import DrawerSizeDemo from './size';
import './index.css';

const DrawerDemo = () => (
  <div className="drawer-demo">
    <hr />
    <div id="components-drawer-demo-basic-right">
      <h2>BasicRight 基础抽屉</h2>
      <div className="code-box-demo">
        <DrawerBasicRightDemo />
      </div>
    </div>
    <hr />
    <div id="components-drawer-demo-placement">
      <h2>Placement 自定义位置</h2>
      <div className="code-box-demo">
        <DrawerPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-drawer-demo-extra">
      <h2>Extra 额外操作</h2>
      <div className="code-box-demo">
        <DrawerExtraDemo />
      </div>
    </div>
    <hr />
    <div id="components-drawer-demo-render-in-current">
      <h2>RenderInCurrent 渲染在当前 DOM</h2>
      <div className="code-box-demo">
        <DrawerRenderInCurrentDemo />
      </div>
    </div>
    <hr />
    <div id="components-drawer-demo-form-in-drawer">
      <h2>FormInDrawer 抽屉表单</h2>
      <div className="code-box-demo">
        <DrawerFormInDrawerDemo />
      </div>
    </div>
    <hr />
    <div id="components-drawer-demo-user-profile">
      <h2>UserProfile 信息预览抽屉</h2>
      <div className="code-box-demo">
        <DrawerUserProfileDemo />
      </div>
    </div>
    <hr />
    <div id="components-drawer-demo-multi-level-drawer">
      <h2>MultiLevelDrawer 多层抽屉</h2>
      <div className="code-box-demo">
        <DrawerMultiLevelDrawerDemo />
      </div>
    </div>
    <hr />
    <div id="components-drawer-demo-size">
      <h2>Size 预设宽度</h2>
      <div className="code-box-demo">
        <DrawerSizeDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default DrawerDemo;
