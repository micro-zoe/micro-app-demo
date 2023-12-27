import React from 'react';
import SliderBasicDemo from './basic';
import SliderInputNumberDemo from './input-number';
import SliderIconSliderDemo from './icon-slider';
import SliderTipFormatterDemo from './tip-formatter';
import SliderEventDemo from './event';
import SliderMarkDemo from './mark';
import SliderVerticalDemo from './vertical';
import SliderShowTooltipDemo from './show-tooltip';
import SliderReverseDemo from './reverse';
import SliderDragableTrackDemo from './dragable-track';
import SliderMultipleTrackDemo from './multiple-track';
import './index.css';

const SliderDemo = () => (
  <div className="slider-demo">
    <hr />
    <div id="components-slider-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <SliderBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-input-number">
      <h2>InputNumber 带输入框的滑块</h2>
      <div className="code-box-demo">
        <SliderInputNumberDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-icon-slider">
      <h2>IconSlider 带 icon 的滑块</h2>
      <div className="code-box-demo">
        <SliderIconSliderDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-tip-formatter">
      <h2>TipFormatter 自定义提示</h2>
      <div className="code-box-demo">
        <SliderTipFormatterDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-event">
      <h2>Event 事件</h2>
      <div className="code-box-demo">
        <SliderEventDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-mark">
      <h2>Mark 带标签的滑块</h2>
      <div className="code-box-demo">
        <SliderMarkDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-vertical">
      <h2>Vertical 垂直</h2>
      <div className="code-box-demo">
        <SliderVerticalDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-show-tooltip">
      <h2>ShowTooltip 控制 ToolTip 的显示</h2>
      <div className="code-box-demo">
        <SliderShowTooltipDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-reverse">
      <h2>Reverse 反向</h2>
      <div className="code-box-demo">
        <SliderReverseDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-dragable-track">
      <h2>DragableTrack 范围可拖拽</h2>
      <div className="code-box-demo">
        <SliderDragableTrackDemo />
      </div>
    </div>
    <hr />
    <div id="components-slider-demo-dragable-multiple">
      <h2>MultipleTrack 多点组合</h2>
      <div className="code-box-demo">
        <SliderMultipleTrackDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default SliderDemo;
