import React from 'react';
import MessageInfoDemo from './info';
import MessageOtherDemo from './other';
import MessageDurationDemo from './duration';
import MessageLoadingDemo from './loading';
import MessageThenableDemo from './thenable';
import MessageUpdateDemo from './update';
import MessageCustomStyleDemo from './custom-style';
import MessageHooksDemo from './hooks';
import './index.css';

const MessageDemo = () => (
  <div className="message-demo">
    <hr />
    <div id="components-message-demo-hooks">
      <h2>Hooks 调用（推荐）</h2>
      <div className="code-box-demo">
        <MessageHooksDemo />
      </div>
    </div>
    <hr />
    <div id="components-message-demo-other">
      <h2>Other 其他提示类型</h2>
      <div className="code-box-demo">
        <MessageOtherDemo />
      </div>
    </div>
    <hr />
    <div id="components-message-demo-duration">
      <h2>Duration 修改延时</h2>
      <div className="code-box-demo">
        <MessageDurationDemo />
      </div>
    </div>
    <hr />
    <div id="components-message-demo-loading">
      <h2>Loading 加载中</h2>
      <div className="code-box-demo">
        <MessageLoadingDemo />
      </div>
    </div>
    <hr />
    <div id="components-message-demo-thenable">
      <h2>Thenable Promise 接口</h2>
      <div className="code-box-demo">
        <MessageThenableDemo />
      </div>
    </div>
    <hr />
    <div id="components-message-demo-custom-style">
      <h2>CustomStyle 自定义样式</h2>
      <div className="code-box-demo">
        <MessageCustomStyleDemo />
      </div>
    </div>
    <hr />
    <div id="components-message-demo-update">
      <h2>Update 更新消息内容</h2>
      <div className="code-box-demo">
        <MessageUpdateDemo />
      </div>
    </div>
    <hr />
    <div id="components-message-demo-info">
      <h2>静态方法（不推荐）</h2>
      <div className="code-box-demo">
        <MessageInfoDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default MessageDemo;
