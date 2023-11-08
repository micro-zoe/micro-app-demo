import React from 'react';
import CalendarBasicDemo from './basic';
import CalendarNoticeCalendarDemo from './notice-calendar';
import CalendarCardDemo from './card';
import CalendarSelectDemo from './select';
import CalendarCustomizeHeaderDemo from './customize-header';
import './index.css';

const CalendarDemo = () => (
  <div className="calendar-demo">
    <hr />
    <div id="components-calendar-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <CalendarBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-calendar-demo-notice-calendar">
      <h2>NoticeCalendar 通知事项日历</h2>
      <div className="code-box-demo">
        <CalendarNoticeCalendarDemo />
      </div>
    </div>
    <hr />
    <div id="components-calendar-demo-card">
      <h2>Card 卡片模式</h2>
      <div className="code-box-demo">
        <CalendarCardDemo />
      </div>
    </div>
    <hr />
    <div id="components-calendar-demo-select">
      <h2>Select 选择功能</h2>
      <div className="code-box-demo">
        <CalendarSelectDemo />
      </div>
    </div>
    <hr />
    <div id="components-calendar-demo-customize-header">
      <h2>CustomizeHeader 自定义头部</h2>
      <div className="code-box-demo">
        <CalendarCustomizeHeaderDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default CalendarDemo;
