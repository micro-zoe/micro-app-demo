import React from 'react';
import NotificationBasicDemo from './basic';
import NotificationDurationDemo from './duration';
import NotificationWithIconDemo from './with-icon';
import NotificationWithBtnDemo from './with-btn';
import NotificationCustomIconDemo from './custom-icon';
import NotificationPlacementDemo from './placement';
import NotificationCustomStyleDemo from './custom-style';
import NotificationUpdateDemo from './update';
import NotificationHooksDemo from './hooks';
import './index.css';

const NotificationDemo = () => (
  <div className="notification-demo">
    <hr />
    <div id="components-notification-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <NotificationBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-duration">
      <h2>Duration 自动关闭的延时</h2>
      <div className="code-box-demo">
        <NotificationDurationDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-with-icon">
      <h2>WithIcon 带有图标的通知提醒框</h2>
      <div className="code-box-demo">
        <NotificationWithIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-with-btn">
      <h2>WithBtn 自定义按钮</h2>
      <div className="code-box-demo">
        <NotificationWithBtnDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-custom-icon">
      <h2>CustomIcon 自定义图标</h2>
      <div className="code-box-demo">
        <NotificationCustomIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-placement">
      <h2>Placement 位置</h2>
      <div className="code-box-demo">
        <NotificationPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-custom-style">
      <h2>CustomStyle 自定义样式</h2>
      <div className="code-box-demo">
        <NotificationCustomStyleDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-update">
      <h2>Update 更新消息内容</h2>
      <div className="code-box-demo">
        <NotificationUpdateDemo />
      </div>
    </div>
    <hr />
    <div id="components-notification-demo-hooks">
      <h2>Hooks 通过 Hooks 获取上下文</h2>
      <div className="code-box-demo">
        <NotificationHooksDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default NotificationDemo;
