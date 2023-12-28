import React from 'react';
import StatisticBasicDemo from './basic';
import StatisticUnitDemo from './unit';
import StatisticCardDemo from './card';
import StatisticCountdownDemo from './countdown';
import StatisticCountupDemo from './countup'
import './index.css';

const StatisticDemo: React.FC = () => (
  <div className="statistic-demo">
    <hr />
    <div id="components-statistic-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <StatisticBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-statistic-demo-unit">
      <h2>Unit 单位</h2>
      <div className="code-box-demo">
        <StatisticUnitDemo />
      </div>
    </div>
    <hr />
    <div id="components-statistic-demo-countup">
      <h2>Countup 动画效果</h2>
      <div className="code-box-demo">
        <StatisticCountupDemo />
      </div>
    </div>
    <hr />
    <div id="components-statistic-demo-card">
      <h2>Card 在卡片中使用</h2>
      <div className="code-box-demo">
        <StatisticCardDemo />
      </div>
    </div>
    <hr />
    <div id="components-statistic-demo-countdown">
      <h2>Countdown 倒计时</h2>
      <div className="code-box-demo">
        <StatisticCountdownDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default StatisticDemo;
