import React from 'react';
import InputNumberBasicDemo from './basic';
import InputNumberSizeDemo from './size';
import InputNumberAddonDemo from './addon';
import InputNumberDisabledDemo from './disabled';
import InputNumberDigitDemo from './digit';
import InputNumberFormatterDemo from './formatter';
import InputNumberKeyboardDemo from './keyboard';
import InputNumberBorderlessDemo from './borderless';
import InputNumberOutOfRangeDemo from './out-of-range';
import InputNumberPrefixDemo from './prefix';
import InputNumberStatusDemo from './status';
import './index.css';

const InputNumberDemo: React.FC = () => (
  <div className="input-number-demo">
    <hr />
    <div id="components-input-number-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <InputNumberBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-size">
      <h2>Size 三种大小</h2>
      <div className="code-box-demo">
        <InputNumberSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-addon">
      <h2>Addon 前置/后置标签</h2>
      <div className="code-box-demo">
        <InputNumberAddonDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-disabled">
      <h2>Disabled 不可用</h2>
      <div className="code-box-demo">
        <InputNumberDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-digit">
      <h2>Digit 高精度小数</h2>
      <div className="code-box-demo">
        <InputNumberDigitDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-formatter">
      <h2>Formatter 格式化展示</h2>
      <div className="code-box-demo">
        <InputNumberFormatterDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-keyboard">
      <h2>Keyboard 键盘行为</h2>
      <div className="code-box-demo">
        <InputNumberKeyboardDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-borderless">
      <h2>Borderless 无边框</h2>
      <div className="code-box-demo">
        <InputNumberBorderlessDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-out-of-range">
      <h2>OutOfRange 超出边界</h2>
      <div className="code-box-demo">
        <InputNumberOutOfRangeDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-prefix">
      <h2>Prefix 前缀</h2>
      <div className="code-box-demo">
        <InputNumberPrefixDemo />
      </div>
    </div>
    <hr />
    <div id="components-input-number-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <InputNumberStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default InputNumberDemo;
