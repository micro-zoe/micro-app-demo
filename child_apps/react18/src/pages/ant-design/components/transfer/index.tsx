import React from 'react';
import TransferBasicDemo from './basic';
import TransferOneWayDemo from './one-way';
import TransferSearchDemo from './search';
import TransferAdvancedDemo from './advanced';
import TransferCustomItemDemo from './custom-item';
import TransferLargeDataDemo from './large-data';
import TransferTableTransferDemo from './table-transfer';
import TransferTreeTransferDemo from './tree-transfer';
import TransferStatusDemo from './status';
import './index.css';

const TransferDemo = () => (
  <div className="transfer-demo">
    <hr />
    <div id="components-transfer-demo-basic">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <TransferBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-one-way">
      <h2>OneWay 单向样式</h2>
      <div className="code-box-demo">
        <TransferOneWayDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-search">
      <h2>Search 带搜索框</h2>
      <div className="code-box-demo">
        <TransferSearchDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-advanced">
      <h2>Advanced 高级用法</h2>
      <div className="code-box-demo">
        <TransferAdvancedDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-custom-item">
      <h2>CustomItem 自定义渲染行数据</h2>
      <div className="code-box-demo">
        <TransferCustomItemDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-large-data">
      <h2>LargeData 分页</h2>
      <div className="code-box-demo">
        <TransferLargeDataDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-table-transfer">
      <h2>TableTransfer 表格穿梭框</h2>
      <div className="code-box-demo">
        <TransferTableTransferDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-tree-transfer">
      <h2>TreeTransfer 树穿梭框</h2>
      <div className="code-box-demo">
        <TransferTreeTransferDemo />
      </div>
    </div>
    <hr />
    <div id="components-transfer-demo-status">
      <h2>Status 自定义状态</h2>
      <div className="code-box-demo">
        <TransferStatusDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TransferDemo;
