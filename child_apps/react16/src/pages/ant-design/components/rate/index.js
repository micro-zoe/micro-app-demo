import React from 'react';
import RateBasicDemo from './basic';
import RateHalfDemo from './half';
import RateTextDemo from './text';
import RateDisabledDemo from './disabled';
import RateClearDemo from './clear';
import RateCharacterDemo from './character';
import RateCharacterFunctionDemo from './character-function';
import './index.css';

const RateDemo = () => (
  <div className="rate-demo">
    <hr />
    <div id="components-rate-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <RateBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-rate-demo-half">
      <h2>Half 半星</h2>
      <div className="code-box-demo">
        <RateHalfDemo />
      </div>
    </div>
    <hr />
    <div id="components-rate-demo-text">
      <h2>Text 文案展现</h2>
      <div className="code-box-demo">
        <RateTextDemo />
      </div>
    </div>
    <hr />
    <div id="components-rate-demo-disabled">
      <h2>Disabled 只读</h2>
      <div className="code-box-demo">
        <RateDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-rate-demo-clear">
      <h2>Clear 清除</h2>
      <div className="code-box-demo">
        <RateClearDemo />
      </div>
    </div>
    <hr />
    <div id="components-rate-demo-character">
      <h2>Character 其他字符</h2>
      <div className="code-box-demo">
        <RateCharacterDemo />
      </div>
    </div>
    <hr />
    <div id="components-rate-demo-character-function">
      <h2>CharacterFunction 自定义字符</h2>
      <div className="code-box-demo">
        <RateCharacterFunctionDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default RateDemo;
