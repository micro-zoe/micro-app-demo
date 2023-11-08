import React from 'react';
import DescriptionsBasicDemo from './basic';
import DescriptionsBorderDemo from './border';
import DescriptionsSizeDemo from './size';
import DescriptionsResponsiveDemo from './responsive';
import DescriptionsVerticalDemo from './vertical';
import DescriptionsVerticalBorderDemo from './vertical-border';
import './index.css';

const DescriptionsDemo = () => (
  <div className="descriptions-demo">
    <hr />
    <div id="components-descriptions-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <DescriptionsBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-descriptions-demo-border">
      <h2>Border 带边框的</h2>
      <div className="code-box-demo">
        <DescriptionsBorderDemo />
      </div>
    </div>
    <hr />
    <div id="components-descriptions-demo-size">
      <h2>Size 自定义尺寸</h2>
      <div className="code-box-demo">
        <DescriptionsSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-descriptions-demo-responsive">
      <h2>Responsive 响应式</h2>
      <div className="code-box-demo">
        <DescriptionsResponsiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-descriptions-demo-vertical">
      <h2>Vertical 垂直</h2>
      <div className="code-box-demo">
        <DescriptionsVerticalDemo />
      </div>
    </div>
    <hr />
    <div id="components-descriptions-demo-vertical-border">
      <h2>VerticalBorder 垂直带边框的</h2>
      <div className="code-box-demo">
        <DescriptionsVerticalBorderDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default DescriptionsDemo;
