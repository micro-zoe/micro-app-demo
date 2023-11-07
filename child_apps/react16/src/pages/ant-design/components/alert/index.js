import React from 'react';
import AlertBasicDemo from './basic';
import AlertStyleDemo from './style';
import AlertClosableDemo from './closable';
import AlertDescriptionDemo from './description';
import AlertIconDemo from './icon';
import AlertCloseTextDemo from './close-text';
import AlertBannerDemo from './banner';
import AlertLoopBannerDemo from './loop-banner';
import AlertSmoothClosedDemo from './smooth-closed';
import AlertErrorBoundaryDemo from './error-boundary';
import AlertActionDemo from './action';
import './index.css';

const AlertDemo = () => (
  <div className="alert-demo">
    <hr />
    <div id="components-alert-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <AlertBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-style">
      <h2>Style 四种样式</h2>
      <div className="code-box-demo">
        <AlertStyleDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-closable">
      <h2>Closable 可关闭的警告提示</h2>
      <div className="code-box-demo">
        <AlertClosableDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-description">
      <h2>Description 含有辅助性文字介绍</h2>
      <div className="code-box-demo">
        <AlertDescriptionDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-icon">
      <h2>Icon 图标</h2>
      <div className="code-box-demo">
        <AlertIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-close-text">
      <h2>CloseText 自定义关闭</h2>
      <div className="code-box-demo">
        <AlertCloseTextDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-banner">
      <h2>Banner 顶部公告</h2>
      <div className="code-box-demo">
        <AlertBannerDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-loop-banner">
      <h2>LoopBanner 轮播的公告</h2>
      <div className="code-box-demo">
        <AlertLoopBannerDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-smooth-closed">
      <h2>SmoothClosed 平滑地卸载</h2>
      <div className="code-box-demo">
        <AlertSmoothClosedDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-error-boundary">
      <h2>ErrorBoundary React 错误处理</h2>
      <div className="code-box-demo">
        <AlertErrorBoundaryDemo />
      </div>
    </div>
    <hr />
    <div id="components-alert-demo-action">
      <h2>Action 操作</h2>
      <div className="code-box-demo">
        <AlertActionDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default AlertDemo;
