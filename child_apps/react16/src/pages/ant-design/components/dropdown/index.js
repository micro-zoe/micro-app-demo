import React from 'react';
import DropdownDeprecatedDemo from './deprecated';
import DropdownBasicDemo from './basic';
import DropdownPlacementDemo from './placement';
import DropdownArrowDemo from './arrow';
import DropdownItemDemo from './item';
import DropdownArrowCenterDemo from './arrow-center';
import DropdownTriggerDemo from './trigger';
import DropdownEventDemo from './event';
import DropdownDropdownButtonDemo from './dropdown-button';
import DropdownCustomDropdownDemo from './custom-dropdown';
import DropdownSubMenuDemo from './sub-menu';
import DropdownContextMenuDemo from './context-menu';
import DropdownLoadingDemo from './loading';
import DropdownOverlayOpenDemo from './overlay-open';
import DropdownSelectableDemo from './selectable';
import './index.css';

const DropdownDemo = () => (
  <div className="dropdown-demo">
    <hr />
    <div id="components-dropdown-demo-deprecated">
      <h2>Deprecated 基础用法（废弃的语法糖）</h2>
      <div className="code-box-demo">
        <DropdownDeprecatedDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <DropdownBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-placement">
      <h2>Placement 弹出位置</h2>
      <div className="code-box-demo">
        <DropdownPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-arrow">
      <h2>Arrow 箭头</h2>
      <div className="code-box-demo">
        <DropdownArrowDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-item">
      <h2>Item 其他元素</h2>
      <div className="code-box-demo">
        <DropdownItemDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-arrow-center">
      <h2>ArrowCenter 箭头指向</h2>
      <div className="code-box-demo">
        <DropdownArrowCenterDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-trigger">
      <h2>Trigger 触发方式</h2>
      <div className="code-box-demo">
        <DropdownTriggerDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-event">
      <h2>Event 触发事件</h2>
      <div className="code-box-demo">
        <DropdownEventDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-dropdown-button">
      <h2>DropdownButton 带下拉框的按钮</h2>
      <div className="code-box-demo">
        <DropdownDropdownButtonDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-custom-dropdown">
      <h2>CustomDropdown 扩展菜单</h2>
      <div className="code-box-demo">
        <DropdownCustomDropdownDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-sub-menu">
      <h2>SubMenu 多级菜单</h2>
      <div className="code-box-demo">
        <DropdownSubMenuDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-context-menu">
      <h2>ContextMenu 右键菜单</h2>
      <div className="code-box-demo">
        <DropdownContextMenuDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-loading">
      <h2>Loading 加载中状态</h2>
      <div className="code-box-demo">
        <DropdownLoadingDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-overlay-open">
      <h2>OverlayOpen 菜单隐藏方式</h2>
      <div className="code-box-demo">
        <DropdownOverlayOpenDemo />
      </div>
    </div>
    <hr />
    <div id="components-dropdown-demo-selectable">
      <h2>Selectable 菜单可选选择</h2>
      <div className="code-box-demo">
        <DropdownSelectableDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default DropdownDemo;
