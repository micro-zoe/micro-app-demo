import React from 'react';
import MenuDeprecatedDemo from './deprecated';
import MenuHorizontalDemo from './horizontal';
import MenuInlineDemo from './inline';
import MenuInlineCollapsedDemo from './inline-collapsed';
import MenuSiderCurrentDemo from './sider-current';
import MenuVerticalDemo from './vertical';
import MenuThemeDemo from './theme';
import MenuSubmenuThemeDemo from './submenu-theme';
import MenuSwitchModeDemo from './switch-mode';
import './index.css';

const MenuDemo = () => (
  <div className="menu-demo">
    <hr />
    <div id="components-menu-demo-deprecated">
      <h2>Deprecated 基础用法（废弃的语法糖）</h2>
      <div className="code-box-demo">
        <MenuDeprecatedDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-horizontal">
      <h2>Horizontal 顶部导航</h2>
      <div className="code-box-demo">
        <MenuHorizontalDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-inline">
      <h2>Inline 内嵌菜单</h2>
      <div className="code-box-demo">
        <MenuInlineDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-inline-collapsed">
      <h2>InlineCollapsed 缩起内嵌菜单</h2>
      <div className="code-box-demo">
        <MenuInlineCollapsedDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-sider-current">
      <h2>SiderCurrent 只展开当前父级菜单</h2>
      <div className="code-box-demo">
        <MenuSiderCurrentDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-vertical">
      <h2>Vertical 垂直菜单</h2>
      <div className="code-box-demo">
        <MenuVerticalDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-theme">
      <h2>Theme 主题</h2>
      <div className="code-box-demo">
        <MenuThemeDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-submenu-theme">
      <h2>SubmenuTheme 子菜单主题</h2>
      <div className="code-box-demo">
        <MenuSubmenuThemeDemo />
      </div>
    </div>
    <hr />
    <div id="components-menu-demo-switch-mode">
      <h2>SwitchMode 切换菜单类型</h2>
      <div className="code-box-demo">
        <MenuSwitchModeDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default MenuDemo;
