import React from 'react';
import ProgressLineDemo from './line';
import ProgressCircleDemo from './circle';
import ProgressLineMiniDemo from './line-mini';
import ProgressCircleMiniDemo from './circle-mini';
import ProgressCircleDynamicDemo from './circle-dynamic';
import ProgressDynamicDemo from './dynamic';
import ProgressFormatDemo from './format';
import ProgressDashboardDemo from './dashboard';
import ProgressSegmentDemo from './segment';
import ProgressLinecapDemo from './linecap';
import ProgressGradientLineDemo from './gradient-line';
import ProgressStepsDemo from './steps';
import './index.css';

const ProgressDemo = () => (
  <div className="progress-demo">
    <hr />
    <div id="components-progress-demo-line">
      <h2>Line 进度条</h2>
      <div className="code-box-demo">
        <ProgressLineDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-circle">
      <h2>Circle 进度圈</h2>
      <div className="code-box-demo">
        <ProgressCircleDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-line-mini">
      <h2>LineMini 小型进度条</h2>
      <div className="code-box-demo">
        <ProgressLineMiniDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-circle-mini">
      <h2>CircleMini 小型进度圈</h2>
      <div className="code-box-demo">
        <ProgressCircleMiniDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-circle-dynamic">
      <h2>CircleDynamic 进度圈动态展示</h2>
      <div className="code-box-demo">
        <ProgressCircleDynamicDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-dynamic">
      <h2>Dynamic 动态展示</h2>
      <div className="code-box-demo">
        <ProgressDynamicDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-format">
      <h2>Format 自定义文字格式</h2>
      <div className="code-box-demo">
        <ProgressFormatDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-dashboard">
      <h2>Dashboard 仪表盘</h2>
      <div className="code-box-demo">
        <ProgressDashboardDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-segment">
      <h2>Segment 分段进度条</h2>
      <div className="code-box-demo">
        <ProgressSegmentDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-linecap">
      <h2>Linecap 边缘形状</h2>
      <div className="code-box-demo">
        <ProgressLinecapDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-gradient-line">
      <h2>GradientLine 自定义进度条渐变色</h2>
      <div className="code-box-demo">
        <ProgressGradientLineDemo />
      </div>
    </div>
    <hr />
    <div id="components-progress-demo-steps">
      <h2>Steps 步骤进度条</h2>
      <div className="code-box-demo">
        <ProgressStepsDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default ProgressDemo;
