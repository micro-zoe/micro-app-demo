import React from 'react';
import MentionsBasicDemo from './basic';
import MentionsAsyncDemo from './async';
import MentionsFormDemo from './form';
import MentionsPrefixDemo from './prefix';
import MentionsReadonlyDemo from './readonly';
import MentionsPlacementDemo from './placement';
import MentionsAutoSizeDemo from './auto-size';
import MentionsStatusDemo from './status';
import './index.css';

const MentionsDemo = () => (
  <div className="mentions-demo">
    <hr />
    <div id="components-mentions-demo-basic">
      <h2>Basic 基本使用</h2>
      <div className="code-box-demo">
        <MentionsBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-mentions-demo-async">
      <h2>Async 异步加载</h2>
      <div className="code-box-demo">
        <MentionsAsyncDemo />
      </div>
    </div>
    <hr />
    <div id="components-mentions-demo-form">
      <h2>Form 配合 Form 使用</h2>
      <div className="code-box-demo">
        <MentionsFormDemo />
      </div>
    </div>
    <hr />
    <div id="components-mentions-demo-prefix">
      <h2>Prefix 自定义触发字符</h2>
      <div className="code-box-demo">
        <MentionsPrefixDemo />
      </div>
    </div>
    <hr />
    <div id="components-mentions-demo-readonly">
      <h2>Readonly 无效或只读</h2>
      <div className="code-box-demo">
        <MentionsReadonlyDemo />
      </div>
    </div>
    <hr />
    <div id="components-mentions-demo-placement">
      <h2>Placement 向上展开</h2>
      <div className="code-box-demo">
        <MentionsPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-mentions-demo-auto-size">
      <h2>AutoSize 自动大小</h2>
      <div className="code-box-demo">
        <MentionsAutoSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-mentions-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <MentionsStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default MentionsDemo;
