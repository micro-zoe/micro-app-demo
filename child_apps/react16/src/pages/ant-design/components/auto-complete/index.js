import React from 'react';
import AutoCompleteBasicDemo from './basic';
import AutoCompleteOptionsDemo from './options';
import AutoCompleteCustomDemo from './custom';
import AutoCompleteNonCaseSensitiveDemo from './non-case-sensitive';
import AutoCompleteCertainCategoryDemo from './certain-category';
import AutoCompleteUncertainCategoryDemo from './uncertain-category';
import AutoCompleteStatusDemo from './status';
import './index.css';

const AutoCompleteDemo = () => (
  <div className="auto-complete-demo">
    <hr />
    <div id="components-auto-complete-demo-basic">
      <h2>Basic 基本使用</h2>
      <div className="code-box-demo">
        <AutoCompleteBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-auto-complete-demo-options">
      <h2>Options 自定义选项</h2>
      <div className="code-box-demo">
        <AutoCompleteOptionsDemo />
      </div>
    </div>
    <hr />
    <div id="components-auto-complete-demo-custom">
      <h2>Custom 自定义输入组件</h2>
      <div className="code-box-demo">
        <AutoCompleteCustomDemo />
      </div>
    </div>
    <hr />
    <div id="components-auto-complete-demo-non-case-sensitive">
      <h2>NonCaseSensitive 不区分大小写</h2>
      <div className="code-box-demo">
        <AutoCompleteNonCaseSensitiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-auto-complete-demo-certain-category">
      <h2>CertainCategory 查询模式 - 确定类目</h2>
      <div className="code-box-demo">
        <AutoCompleteCertainCategoryDemo />
      </div>
    </div>
    <hr />
    <div id="components-auto-complete-demo-uncertain-category">
      <h2>UncertainCategory 查询模式 - 不确定类目</h2>
      <div className="code-box-demo">
        <AutoCompleteUncertainCategoryDemo />
      </div>
    </div>
    <hr />
    <div id="components-auto-complete-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <AutoCompleteStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default AutoCompleteDemo;
