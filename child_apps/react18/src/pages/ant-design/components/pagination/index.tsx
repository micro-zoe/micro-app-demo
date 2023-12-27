import React from 'react';
import PaginationBasicDemo from './basic';
import PaginationMoreDemo from './more';
import PaginationChangerDemo from './changer';
import PaginationJumpDemo from './jump';
import PaginationMiniDemo from './mini';
import PaginationSimpleDemo from './simple';
import PaginationControlledDemo from './controlled';
import PaginationTotalDemo from './total';
import PaginationAllDemo from './all';
import PaginationItemRenderDemo from './item-render';
import './index.css';

const PaginationDemo = () => (
  <div className="pagination-demo">
    <hr />
    <div id="components-pagination-demo-basic">
      <h2>Basic 基本</h2>
      <div className="code-box-demo">
        <PaginationBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-more">
      <h2>More 更多</h2>
      <div className="code-box-demo">
        <PaginationMoreDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-changer">
      <h2>Changer 改变</h2>
      <div className="code-box-demo">
        <PaginationChangerDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-jump">
      <h2>Jump 跳转</h2>
      <div className="code-box-demo">
        <PaginationJumpDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-mini">
      <h2>Mini 迷你</h2>
      <div className="code-box-demo">
        <PaginationMiniDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-simple">
      <h2>Simple 简洁</h2>
      <div className="code-box-demo">
        <PaginationSimpleDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-controlled">
      <h2>Controlled 受控</h2>
      <div className="code-box-demo">
        <PaginationControlledDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-total">
      <h2>Total 总数</h2>
      <div className="code-box-demo">
        <PaginationTotalDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-all">
      <h2>All 全部展示</h2>
      <div className="code-box-demo">
        <PaginationAllDemo />
      </div>
    </div>
    <hr />
    <div id="components-pagination-demo-item-render">
      <h2>ItemRender 上一步和下一步</h2>
      <div className="code-box-demo">
        <PaginationItemRenderDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default PaginationDemo;
