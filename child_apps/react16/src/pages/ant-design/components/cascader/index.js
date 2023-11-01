import React from 'react';
import CascaderBasicDemo from './basic';
import CascaderDefaultValueDemo from './default-value';
import CascaderCustomTriggerDemo from './custom-trigger';
import CascaderHoverDemo from './hover';
import CascaderDisabledOptionDemo from './disabled-option';
import CascaderChangeOnSelectDemo from './change-on-select';
import CascaderMultipleDemo from './multiple';
import CascaderShowCheckedStrategyDemo from './show-checked-strategy';
import CascaderSizeDemo from './size';
import CascaderCustomRenderDemo from './custom-render';
import CascaderSearchDemo from './search';
import CascaderLazyDemo from './lazy';
import CascaderFieldsNameDemo from './fields-name';
import CascaderCustomDropdownDemo from './custom-dropdown';
import CascaderPlacementDemo from './placement';
import CascaderStatusDemo from './status';
import './index.css';

const CascaderDemo = () => (
  <div className="cascader-demo">
    <hr />
    <div id="components-cascader-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <CascaderBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-default-value">
      <h2>DefaultValue 默认值</h2>
      <div className="code-box-demo">
        <CascaderDefaultValueDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-custom-trigger">
      <h2>CustomTrigger 可以自定义显示</h2>
      <div className="code-box-demo">
        <CascaderCustomTriggerDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-hover">
      <h2>Hover 移入展开</h2>
      <div className="code-box-demo">
        <CascaderHoverDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-disabled-option">
      <h2>DisabledOption 禁用选项</h2>
      <div className="code-box-demo">
        <CascaderDisabledOptionDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-change-on-select">
      <h2>ChangeOnSelect 选择即改变</h2>
      <div className="code-box-demo">
        <CascaderChangeOnSelectDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-multiple">
      <h2>Multiple 多选</h2>
      <div className="code-box-demo">
        <CascaderMultipleDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-show-checked-strategy">
      <h2>ShowCheckedStrategy 自定义回填方式</h2>
      <div className="code-box-demo">
        <CascaderShowCheckedStrategyDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-size">
      <h2>Size 大小</h2>
      <div className="code-box-demo">
        <CascaderSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-custom-render">
      <h2>CustomRender 自定义已选项</h2>
      <div className="code-box-demo">
        <CascaderCustomRenderDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-search">
      <h2>Search 搜索</h2>
      <div className="code-box-demo">
        <CascaderSearchDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-lazy">
      <h2>Lazy 动态加载选项</h2>
      <div className="code-box-demo">
        <CascaderLazyDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-fields-name">
      <h2>FieldsName 自定义字段名</h2>
      <div className="code-box-demo">
        <CascaderFieldsNameDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-custom-dropdown">
      <h2>CustomDropdown 扩展菜单</h2>
      <div className="code-box-demo">
        <CascaderCustomDropdownDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-placement">
      <h2>Placement 弹出位置</h2>
      <div className="code-box-demo">
        <CascaderPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-cascader-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <CascaderStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default CascaderDemo;
