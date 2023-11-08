import React from 'react';
import ListSimpleDemo from './simple';
import ListBasicDemo from './basic';
import ListLoadmoreDemo from './loadmore';
import ListVerticalDemo from './vertical';
import ListGridDemo from './grid';
import ListResponsiveDemo from './responsive';
import ListInfiniteLoadDemo from './infinite-load';
import ListVirtualListDemo from './virtual-list';
import './index.css';

const ListDemo = () => (
  <div className="list-demo">
    <hr />
    <div id="components-list-demo-simple">
      <h2>Simple 简单列表</h2>
      <div className="code-box-demo">
        <ListSimpleDemo />
      </div>
    </div>
    <hr />
    <div id="components-list-demo-basic">
      <h2>Basic 基础列表</h2>
      <div className="code-box-demo">
        <ListBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-list-demo-loadmore">
      <h2>Loadmore 加载更多</h2>
      <div className="code-box-demo">
        <ListLoadmoreDemo />
      </div>
    </div>
    <hr />
    <div id="components-list-demo-vertical">
      <h2>Vertical 竖排列表样式</h2>
      <div className="code-box-demo">
        <ListVerticalDemo />
      </div>
    </div>
    <hr />
    <div id="components-list-demo-grid">
      <h2>Grid 栅格列表</h2>
      <div className="code-box-demo">
        <ListGridDemo />
      </div>
    </div>
    <hr />
    <div id="components-list-demo-responsive">
      <h2>Responsive 响应式的栅格列表</h2>
      <div className="code-box-demo">
        <ListResponsiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-list-demo-infinite-load">
      <h2>InfiniteLoad 滚动加载</h2>
      <div className="code-box-demo">
        <ListInfiniteLoadDemo />
      </div>
    </div>
    <hr />
    <div id="components-list-demo-virtual-list">
      <h2>VirtualList 滚动加载无限长列表</h2>
      <div className="code-box-demo">
        <ListVirtualListDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default ListDemo;
