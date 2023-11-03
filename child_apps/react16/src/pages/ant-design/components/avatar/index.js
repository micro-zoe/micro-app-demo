import React from 'react';
import AvatarBasicDemo from './basic';
import AvatarTypeDemo from './type';
import AvatarDynamicDemo from './dynamic';
import AvatarBadgeDemo from './badge';
import AvatarGroupDemo from './group';
import AvatarResponsiveDemo from './responsive';
import './index.css';

const AvatarDemo = () => (
  <div className="avatar-demo">
    <hr />
    <div id="components-avatar-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <AvatarBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-avatar-demo-type">
      <h2>Type 类型</h2>
      <div className="code-box-demo">
        <AvatarTypeDemo />
      </div>
    </div>
    <hr />
    <div id="components-avatar-demo-dynamic">
      <h2>Dynamic 自动调整字符大小</h2>
      <div className="code-box-demo">
        <AvatarDynamicDemo />
      </div>
    </div>
    <hr />
    <div id="components-avatar-demo-badge">
      <h2>Badge 带徽标的头像</h2>
      <div className="code-box-demo">
        <AvatarBadgeDemo />
      </div>
    </div>
    <hr />
    <div id="components-avatar-demo-group">
      <h2>Group Avatar.Group</h2>
      <div className="code-box-demo">
        <AvatarGroupDemo />
      </div>
    </div>
    <hr />
    <div id="components-avatar-demo-responsive">
      <h2>Responsive 响应式尺寸</h2>
      <div className="code-box-demo">
        <AvatarResponsiveDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default AvatarDemo;
