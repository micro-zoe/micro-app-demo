import React from 'react';
import ResultSuccessDemo from './success';
import ResultInfoDemo from './info';
import ResultWarningDemo from './warning';
import Result403Demo from './403';
import Result404Demo from './404';
import Result500Demo from './500';
import ResultErrorDemo from './error';
import ResultCustomIconDemo from './custom-icon';
import './index.css';

const ResultDemo = () => (
  <div className="result-demo">
    <hr />
    <div id="components-result-demo-success">
      <h2>Success Success</h2>
      <div className="code-box-demo">
        <ResultSuccessDemo />
      </div>
    </div>
    <hr />
    <div id="components-result-demo-info">
      <h2>Info Info</h2>
      <div className="code-box-demo">
        <ResultInfoDemo />
      </div>
    </div>
    <hr />
    <div id="components-result-demo-warning">
      <h2>Warning Warning</h2>
      <div className="code-box-demo">
        <ResultWarningDemo />
      </div>
    </div>
    <hr />
    <div id="components-result-demo-403">
      <h2>403 403</h2>
      <div className="code-box-demo">
        <Result403Demo />
      </div>
    </div>
    <hr />
    <div id="components-result-demo-404">
      <h2>404 404</h2>
      <div className="code-box-demo">
        <Result404Demo />
      </div>
    </div>
    <hr />
    <div id="components-result-demo-500">
      <h2>500 500</h2>
      <div className="code-box-demo">
        <Result500Demo />
      </div>
    </div>
    <hr />
    <div id="components-result-demo-error">
      <h2>Error Error</h2>
      <div className="code-box-demo">
        <ResultErrorDemo />
      </div>
    </div>
    <hr />
    <div id="components-result-demo-custom-icon">
      <h2>CustomIcon 自定义 icon</h2>
      <div className="code-box-demo">
        <ResultCustomIconDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default ResultDemo;
