import React from 'react';
import TagBasicDemo from './basic';
import TagColorfulDemo from './colorful';
import TagControlDemo from './control';
import TagCheckableDemo from './checkable';
import TagAnimationDemo from './animation';
import TagIconDemo from './icon';
import TagStatusDemo from './status';
import './index.css';

const TagDemo = () => (
  <div className="tag-demo">
    <hr />
    <div id="components-tag-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <TagBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-tag-demo-colorful">
      <h2>Colorful 多彩标签</h2>
      <div className="code-box-demo">
        <TagColorfulDemo />
      </div>
    </div>
    <hr />
    <div id="components-tag-demo-control">
      <h2>Control 动态添加和删除</h2>
      <div className="code-box-demo">
        <TagControlDemo />
      </div>
    </div>
    <hr />
    <div id="components-tag-demo-checkable">
      <h2>Checkable 可选择标签</h2>
      <div className="code-box-demo">
        <TagCheckableDemo />
      </div>
    </div>
    <hr />
    <div id="components-tag-demo-animation">
      <h2>Animation 添加动画</h2>
      <div className="code-box-demo">
        <TagAnimationDemo />
      </div>
    </div>
    <hr />
    <div id="components-tag-demo-icon">
      <h2>Icon 图标按钮</h2>
      <div className="code-box-demo">
        <TagIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-tag-demo-status">
      <h2>Status 预设状态的标签</h2>
      <div className="code-box-demo">
        <TagStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TagDemo;
