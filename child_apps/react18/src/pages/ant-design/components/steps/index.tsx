import React from 'react';
import StepsDeprecatedDemo from './deprecated';
import StepsSimpleDemo from './simple';
import StepsSmallSizeDemo from './small-size';
import StepsIconDemo from './icon';
import StepsStepNextDemo from './step-next';
import StepsVerticalDemo from './vertical';
import StepsVerticalSmallDemo from './vertical-small';
import StepsErrorDemo from './error';
import StepsProgressDotDemo from './progress-dot';
import StepsCustomizedProgressDotDemo from './customized-progress-dot';
import StepsClickableDemo from './clickable';
import StepsNavDemo from './nav';
import StepsProgressDemo from './progress';
import StepsLabelPlacementDemo from './label-placement';
import './index.css';

const StepsDemo = () => (
  <div className="steps-demo">
    <hr />
    <div id="components-steps-demo-simple">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <StepsSimpleDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-small-size">
      <h2>SmallSize 迷你版</h2>
      <div className="code-box-demo">
        <StepsSmallSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-icon">
      <h2>Icon 带图标的步骤条</h2>
      <div className="code-box-demo">
        <StepsIconDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-step-next">
      <h2>StepNext 步骤切换</h2>
      <div className="code-box-demo">
        <StepsStepNextDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-vertical">
      <h2>Vertical 竖直方向的步骤条</h2>
      <div className="code-box-demo">
        <StepsVerticalDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-vertical-small">
      <h2>VerticalSmall 竖直方向的小型步骤条</h2>
      <div className="code-box-demo">
        <StepsVerticalSmallDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-error">
      <h2>Error 步骤运行错误</h2>
      <div className="code-box-demo">
        <StepsErrorDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-progress-dot">
      <h2>ProgressDot 点状步骤条</h2>
      <div className="code-box-demo">
        <StepsProgressDotDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-customized-progress-dot">
      <h2>CustomizedProgressDot 自定义点状步骤条</h2>
      <div className="code-box-demo">
        <StepsCustomizedProgressDotDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-clickable">
      <h2>Clickable 可点击</h2>
      <div className="code-box-demo">
        <StepsClickableDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-nav">
      <h2>Nav 导航步骤</h2>
      <div className="code-box-demo">
        <StepsNavDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-progress">
      <h2>Progress 带有进度的步骤</h2>
      <div className="code-box-demo">
        <StepsProgressDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-label-placement">
      <h2>LabelPlacement 标签放置位置</h2>
      <div className="code-box-demo">
        <StepsLabelPlacementDemo />
      </div>
    </div>
    <hr />
    <div id="components-steps-demo-deprecated">
      <h2>Inline 内联步骤</h2>
      <div className="code-box-demo">
        <StepsDeprecatedDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default StepsDemo;
