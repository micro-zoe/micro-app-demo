import React from 'react';
import InputBasicDemo from './basic';
import InputSizeDemo from './size';
import InputAddonDemo from './addon';
import InputGroupDemo from './group';
import InputSearchInputDemo from './search-input';
import InputSearchInputLoadingDemo from './search-input-loading';
import InputTextareaDemo from './textarea';
import InputAutosizeTextareaDemo from './autosize-textarea';
import InputTooltipDemo from './tooltip';
import InputPresuffixDemo from './presuffix';
import InputPasswordInputDemo from './password-input';
import InputAllowClearDemo from './allow-clear';
import InputShowCountDemo from './show-count';
import InputTextareaShowCountDemo from './textarea-show-count';
import InputStatusDemo from './status';
import InputBorderlessDemo from './borderless';
import InputFocusDemo from './focus';
import './index.css';

const InputDemo = () => (
  <div className="input-demo">
    <hr />
    <div id="components-input-demo-basic">
      <h2>Basic 基本使用</h2>
      <div className="code-box-demo">
        <InputBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-size">
      <h2>Size 三种大小</h2>
      <div className="code-box-demo">
        <InputSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-addon">
      <h2>Addon 前置/后置标签</h2>
      <div className="code-box-demo">
        <InputAddonDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-group">
      <h2>Group 输入框组合</h2>
      <div className="code-box-demo">
        <InputGroupDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-search-input">
      <h2>SearchInput 搜索框</h2>
      <div className="code-box-demo">
        <InputSearchInputDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-search-input-loading">
      <h2>SearchInputLoading 搜索框 loading</h2>
      <div className="code-box-demo">
        <InputSearchInputLoadingDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-textarea">
      <h2>Textarea 文本域</h2>
      <div className="code-box-demo">
        <InputTextareaDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-autosize-textarea">
      <h2>AutosizeTextarea 适应文本高度的文本域</h2>
      <div className="code-box-demo">
        <InputAutosizeTextareaDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-tooltip">
      <h2>Tooltip 输入时格式化展示</h2>
      <div className="code-box-demo">
        <InputTooltipDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-presuffix">
      <h2>Presuffix 前缀和后缀</h2>
      <div className="code-box-demo">
        <InputPresuffixDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-password-input">
      <h2>PasswordInput 密码框</h2>
      <div className="code-box-demo">
        <InputPasswordInputDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-allow-clear">
      <h2>AllowClear 带移除图标</h2>
      <div className="code-box-demo">
        <InputAllowClearDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-show-count">
      <h2>ShowCount 带字数提示</h2>
      <div className="code-box-demo">
        <InputShowCountDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-textarea-show-count">
      <h2>TextareaShowCount 带字数提示的文本域</h2>
      <div className="code-box-demo">
        <InputTextareaShowCountDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <InputStatusDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-borderless">
      <h2>Borderless 无边框</h2>
      <div className="code-box-demo">
        <InputBorderlessDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-demo-focus">
      <h2>Focus 聚焦</h2>
      <div className="code-box-demo">
        <InputFocusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default InputDemo;
