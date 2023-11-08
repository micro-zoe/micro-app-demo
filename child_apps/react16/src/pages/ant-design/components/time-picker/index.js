import React from 'react';
import TimePickerBasicDemo from './basic';
import TimePickerValueDemo from './value';
import TimePickerSizeDemo from './size';
import TimePickerDisabledDemo from './disabled';
import TimePickerHideColumnDemo from './hide-column';
import TimePickerIntervalOptionsDemo from './interval-options';
import TimePickerAddonDemo from './addon';
import TimePicker12hoursDemo from './12hours';
import TimePickerRangePickerDemo from './range-picker';
import TimePickerBorderedDemo from './bordered';
import TimePickerStatusDemo from './status';
import './index.css';

const TimePickerDemo = () => (
  <div className="time-picker-demo">
    <hr />
    <div id="components-time-picker-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <TimePickerBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-value">
      <h2>Value 受控组件</h2>
      <div className="code-box-demo">
        <TimePickerValueDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-size">
      <h2>Size 三种大小</h2>
      <div className="code-box-demo">
        <TimePickerSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-disabled">
      <h2>Disabled 禁用</h2>
      <div className="code-box-demo">
        <TimePickerDisabledDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-hide-column">
      <h2>HideColumn 选择时分</h2>
      <div className="code-box-demo">
        <TimePickerHideColumnDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-interval-options">
      <h2>IntervalOptions 步长选项</h2>
      <div className="code-box-demo">
        <TimePickerIntervalOptionsDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-addon">
      <h2>Addon 附加内容</h2>
      <div className="code-box-demo">
        <TimePickerAddonDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-12hours">
      <h2>12hours 12 小时制</h2>
      <div className="code-box-demo">
        <TimePicker12hoursDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-range-picker">
      <h2>RangePicker 范围选择器</h2>
      <div className="code-box-demo">
        <TimePickerRangePickerDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-bordered">
      <h2>Bordered 无边框</h2>
      <div className="code-box-demo">
        <TimePickerBorderedDemo />
      </div>
    </div>
    <hr />
    <div id="components-time-picker-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <TimePickerStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TimePickerDemo;
