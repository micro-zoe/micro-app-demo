import React from 'react';
import SelectBasicDemo from './basic';
import SelectSearchDemo from './search';
import SelectMultipleDemo from './multiple';
import SelectSizeDemo from './size';
import SelectOptionLabelPropDemo from './option-label-prop';
import SelectSearchSortDemo from './search-sort';
import SelectTagsDemo from './tags';
import SelectOptgroupDemo from './optgroup';
import SelectCoordinateDemo from './coordinate';
import SelectSearchBoxDemo from './search-box';
import SelectLabelInValueDemo from './label-in-value';
import SelectAutomaticTokenizationDemo from './automatic-tokenization';
import SelectSelectUsersDemo from './select-users';
import SelectCustomDropdownMenuDemo from './custom-dropdown-menu';
import SelectHideSelectedDemo from './hide-selected';
import SelectBorderedDemo from './bordered';
import SelectCustomTagRenderDemo from './custom-tag-render';
import SelectResponsiveDemo from './responsive';
import SelectBigDataDemo from './big-data';
import SelectStatusDemo from './status';
import SelectPlacementDemo from './placement';
import './index.css';

const SelectDemo = () => (
  <div className="select-demo">
    <hr />
    <div id="components-select-demo-basic">
      <h2>Basic 基本使用</h2>
      <div className="code-box-demo">
        <SelectBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-search">
      <h2>Search 带搜索框</h2>
      <div className="code-box-demo">
        <SelectSearchDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-multiple">
      <h2>Multiple 多选</h2>
      <div className="code-box-demo">
        <SelectMultipleDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-size">
      <h2>Size 三种大小</h2>
      <div className="code-box-demo">
        <SelectSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-option-label-prop">
      <h2>OptionLabelProp 定制回填内容</h2>
      <div className="code-box-demo">
        <SelectOptionLabelPropDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-search-sort">
      <h2>SearchSort 带排序的搜索</h2>
      <div className="code-box-demo">
        <SelectSearchSortDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-tags">
      <h2>Tags 标签</h2>
      <div className="code-box-demo">
        <SelectTagsDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-optgroup">
      <h2>Optgroup 分组</h2>
      <div className="code-box-demo">
        <SelectOptgroupDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-coordinate">
      <h2>Coordinate 联动</h2>
      <div className="code-box-demo">
        <SelectCoordinateDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-search-box">
      <h2>SearchBox 搜索框</h2>
      <div className="code-box-demo">
        <SelectSearchBoxDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-label-in-value">
      <h2>LabelInValue 获得选项的文本</h2>
      <div className="code-box-demo">
        <SelectLabelInValueDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-automatic-tokenization">
      <h2>AutomaticTokenization 自动分词</h2>
      <div className="code-box-demo">
        <SelectAutomaticTokenizationDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-select-users">
      <h2>SelectUsers 搜索用户</h2>
      <div className="code-box-demo">
        <SelectSelectUsersDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-custom-dropdown-menu">
      <h2>CustomDropdownMenu 扩展菜单</h2>
      <div className="code-box-demo">
        <SelectCustomDropdownMenuDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-hide-selected">
      <h2>HideSelected 隐藏已选择选项</h2>
      <div className="code-box-demo">
        <SelectHideSelectedDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-bordered">
      <h2>Bordered 无边框</h2>
      <div className="code-box-demo">
        <SelectBorderedDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-custom-tag-render">
      <h2>CustomTagRender 自定义选择标签</h2>
      <div className="code-box-demo">
        <SelectCustomTagRenderDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-responsive">
      <h2>Responsive 响应式 maxTagCount</h2>
      <div className="code-box-demo">
        <SelectResponsiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-big-data">
      <h2>BigData 大数据</h2>
      <div className="code-box-demo">
        <SelectBigDataDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <SelectStatusDemo />
      </div>
    </div>
    <hr />
    <div id="components-select-demo-placement">
      <h2>Placement 弹出位置</h2>
      <div className="code-box-demo">
        <SelectPlacementDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default SelectDemo;
