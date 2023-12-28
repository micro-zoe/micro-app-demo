import React from 'react';
import ButtonBasicDemo from './basic';
import ButtonIconDemo from './icon';
import ButtonSizeDemo from './size';
import ButtonDisabledDemo from './disabled';
import ButtonLoadingDemo from './loading';
import ButtonMultipleDemo from './multiple';
import ButtonGhostDemo from './ghost';
import ButtonDangerDemo from './danger';
import ButtonBlockDemo from './block';
import './index.css';

const ButtonDemo: React.FC = () => (
  <div className="button-demo">
    <hr />
    <div id="components-button-demo-basic">
      <h2>Basic 按钮类型</h2>
      <div className="code-box-demo">
        <ButtonBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-icon">
      <h2>Icon 图标按钮</h2>
      <div className="code-box-demo">
        <ButtonIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-size">
      <h2>Size 按钮尺寸</h2>
      <div className="code-box-demo">
        <ButtonSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-disabled">
      <h2>Disabled 不可用状态</h2>
      <div className="code-box-demo">
        <ButtonDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-loading">
      <h2>Loading 加载中状态</h2>
      <div className="code-box-demo">
        <ButtonLoadingDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-multiple">
      <h2>Multiple 多个按钮组合</h2>
      <div className="code-box-demo">
        <ButtonMultipleDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-ghost">
      <h2>Ghost 幽灵按钮</h2>
      <div className="code-box-demo">
        <ButtonGhostDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-danger">
      <h2>Danger 危险按钮</h2>
      <div className="code-box-demo">
        <ButtonDangerDemo />
      </div>
    </div>
    <hr />
    <div id="components-button-demo-block">
      <h2>Block Block 按钮</h2>
      <div className="code-box-demo">
        <ButtonBlockDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default ButtonDemo;
