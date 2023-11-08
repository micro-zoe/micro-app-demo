import React from 'react';
import DatePickerBasicDemo from './basic';
import DatePickerRangePickerDemo from './range-picker';
import DatePickerSwitchableDemo from './switchable';
import DatePickerFormatDemo from './format';
import DatePickerTimeDemo from './time';
import DatePickerDisabledDemo from './disabled';
import DatePickerDisabledDateDemo from './disabled-date';
import DatePickerSelectInRangeDemo from './select-in-range';
import DatePickerPresettedRangesDemo from './presetted-ranges';
import DatePickerExtraFooterDemo from './extra-footer';
import DatePickerSizeDemo from './size';
import DatePickerDateRenderDemo from './date-render';
import DatePickerStatusDemo from './status';
import DatePickerBorderedDemo from './bordered';
import DatePickerPlacementDemo from './placement';
import './index.css';

const DatePickerDemo = () => (
  <div className="date-picker-demo">
    <hr />
    <div id="components-date-picker-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <DatePickerBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-range-picker">
      <h2>RangePicker 范围选择器</h2>
      <div className="code-box-demo">
        <DatePickerRangePickerDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-switchable">
      <h2>Switchable 切换不同的选择器</h2>
      <div className="code-box-demo">
        <DatePickerSwitchableDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-format">
      <h2>Format 日期格式</h2>
      <div className="code-box-demo">
        <DatePickerFormatDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-time">
      <h2>Time 日期时间选择</h2>
      <div className="code-box-demo">
        <DatePickerTimeDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-disabled">
      <h2>Disabled 禁用</h2>
      <div className="code-box-demo">
        <DatePickerDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-disabled-date">
      <h2>DisabledDate 不可选择日期和时间</h2>
      <div className="code-box-demo">
        <DatePickerDisabledDateDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-select-in-range">
      <h2>SelectInRange 选择不超过七天的范围</h2>
      <div className="code-box-demo">
        <DatePickerSelectInRangeDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-presetted-ranges">
      <h2>PresettedRanges 预设范围</h2>
      <div className="code-box-demo">
        <DatePickerPresettedRangesDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-extra-footer">
      <h2>ExtraFooter 额外的页脚</h2>
      <div className="code-box-demo">
        <DatePickerExtraFooterDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-size">
      <h2>Size 三种大小</h2>
      <div className="code-box-demo">
        <DatePickerSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-date-render">
      <h2>DateRender 定制日期单元格</h2>
      <div className="code-box-demo">
        <DatePickerDateRenderDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <DatePickerStatusDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-bordered">
      <h2>Bordered 无边框</h2>
      <div className="code-box-demo">
        <DatePickerBorderedDemo />
      </div>
    </div>
    <hr />
    <div id="components-date-picker-demo-placement">
      <h2>Placement 弹出位置</h2>
      <div className="code-box-demo">
        <DatePickerPlacementDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default DatePickerDemo;
