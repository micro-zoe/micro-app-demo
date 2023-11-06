import React from 'react';
import TimelineBasicDemo from './basic';
import TimelineColorDemo from './color';
import TimelinePendingDemo from './pending';
import TimelineAlternateDemo from './alternate';
import TimelineCustomDemo from './custom';
import TimelineRightDemo from './right';
import TimelineLabelDemo from './label';
import './index.css';

const TimelineDemo = () => (
  <div className="timeline-demo">
    <hr />
    <div id="components-timeline-demo-basic">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <TimelineBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-timeline-demo-color">
      <h2>Color 圆圈颜色</h2>
      <div className="code-box-demo">
        <TimelineColorDemo />
      </div>
    </div>
    <hr />
    <div id="components-timeline-demo-pending">
      <h2>Pending 最后一个及排序</h2>
      <div className="code-box-demo">
        <TimelinePendingDemo />
      </div>
    </div>
    <hr />
    <div id="components-timeline-demo-alternate">
      <h2>Alternate 交替展现</h2>
      <div className="code-box-demo">
        <TimelineAlternateDemo />
      </div>
    </div>
    <hr />
    <div id="components-timeline-demo-custom">
      <h2>Custom 自定义时间轴点</h2>
      <div className="code-box-demo">
        <TimelineCustomDemo />
      </div>
    </div>
    <hr />
    <div id="components-timeline-demo-right">
      <h2>Right 右侧时间轴点</h2>
      <div className="code-box-demo">
        <TimelineRightDemo />
      </div>
    </div>
    <hr />
    <div id="components-timeline-demo-label">
      <h2>Label 标签</h2>
      <div className="code-box-demo">
        <TimelineLabelDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TimelineDemo;
