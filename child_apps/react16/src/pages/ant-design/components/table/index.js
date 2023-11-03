import React from 'react';
import TableBasicDemo from './basic';
import TableJsxDemo from './jsx';
import TableRowSelectionDemo from './row-selection';
import TableRowSelectionAndOperationDemo from './row-selection-and-operation';
import TableRowSelectionCustomDemo from './row-selection-custom';
import TableHeadDemo from './head';
import TableFilterInTreeDemo from './filter-in-tree';
import TableFilterSearchDemo from './filter-search';
import TableMultipleSorterDemo from './multiple-sorter';
import TableResetFilterDemo from './reset-filter';
import TableCustomFilterPanelDemo from './custom-filter-panel';
import TableAjaxDemo from './ajax';
import TableSizeDemo from './size';
import TableBorderedDemo from './bordered';
import TableExpandDemo from './expand';
import TableOrderColumnDemo from './order-column';
import TableColspanRowspanDemo from './colspan-rowspan';
import TableTreeDataDemo from './tree-data';
import TableFixedHeaderDemo from './fixed-header';
import TableFixedColumnsDemo from './fixed-columns';
import TableFixedColumnsHeaderDemo from './fixed-columns-header';
import TableGroupingColumnsDemo from './grouping-columns';
import TableEditCellDemo from './edit-cell';
import TableEditRowDemo from './edit-row';
import TableNestedTableDemo from './nested-table';
import TableDragSortingDemo from './drag-sorting';
import TableDragSortingHandlerDemo from './drag-sorting-handler';
import TableEllipsisDemo from './ellipsis';
import TableEllipsisCustomTooltipDemo from './ellipsis-custom-tooltip';
import TableSummaryDemo from './summary';
import TableVirtualListDemo from './virtual-list';
import TableResponsiveDemo from './responsive';
import TablePaginationDemo from './pagination';
import TableStickyDemo from './sticky';
import TableDynamicSettingsDemo from './dynamic-settings';
import './index.css';

const TableDemo = () => (
  <div className="table-demo">
    <hr />
    <div id="components-table-demo-basic">
      <h2>Basic 基本用法</h2>
      <div className="code-box-demo">
        <TableBasicDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-jsx">
      <h2>Jsx JSX 风格的 API</h2>
      <div className="code-box-demo">
        <TableJsxDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-row-selection">
      <h2>RowSelection 可选择</h2>
      <div className="code-box-demo">
        <TableRowSelectionDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-row-selection-and-operation">
      <h2>RowSelectionAndOperation 选择和操作</h2>
      <div className="code-box-demo">
        <TableRowSelectionAndOperationDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-row-selection-custom">
      <h2>RowSelectionCustom 自定义选择项</h2>
      <div className="code-box-demo">
        <TableRowSelectionCustomDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-head">
      <h2>Head 筛选和排序</h2>
      <div className="code-box-demo">
        <TableHeadDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-filter-in-tree">
      <h2>FilterInTree 树型筛选菜单</h2>
      <div className="code-box-demo">
        <TableFilterInTreeDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-filter-search">
      <h2>FilterSearch 自定义筛选的搜索</h2>
      <div className="code-box-demo">
        <TableFilterSearchDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-multiple-sorter">
      <h2>MultipleSorter 多列排序</h2>
      <div className="code-box-demo">
        <TableMultipleSorterDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-reset-filter">
      <h2>ResetFilter 可控的筛选和排序</h2>
      <div className="code-box-demo">
        <TableResetFilterDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-custom-filter-panel">
      <h2>CustomFilterPanel 自定义筛选菜单</h2>
      <div className="code-box-demo">
        <TableCustomFilterPanelDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-ajax">
      <h2>Ajax 远程加载数据</h2>
      <div className="code-box-demo">
        <TableAjaxDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-size">
      <h2>Size 紧凑型</h2>
      <div className="code-box-demo">
        <TableSizeDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-bordered">
      <h2>Bordered 带边框</h2>
      <div className="code-box-demo">
        <TableBorderedDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-expand">
      <h2>Expand 可展开</h2>
      <div className="code-box-demo">
        <TableExpandDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-order-column">
      <h2>OrderColumn 特殊列排序</h2>
      <div className="code-box-demo">
        <TableOrderColumnDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-colspan-rowspan">
      <h2>ColspanRowspan 表格行/列合并</h2>
      <div className="code-box-demo">
        <TableColspanRowspanDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-tree-data">
      <h2>TreeData 树形数据展示</h2>
      <div className="code-box-demo">
        <TableTreeDataDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-fixed-header">
      <h2>FixedHeader 固定表头</h2>
      <div className="code-box-demo">
        <TableFixedHeaderDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-fixed-columns">
      <h2>FixedColumns 固定列</h2>
      <div className="code-box-demo">
        <TableFixedColumnsDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-fixed-columns-header">
      <h2>FixedColumnsHeader 固定头和列</h2>
      <div className="code-box-demo">
        <TableFixedColumnsHeaderDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-grouping-columns">
      <h2>GroupingColumns 表头分组</h2>
      <div className="code-box-demo">
        <TableGroupingColumnsDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-edit-cell">
      <h2>EditCell 可编辑单元格</h2>
      <div className="code-box-demo">
        <TableEditCellDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-edit-row">
      <h2>EditRow 可编辑行</h2>
      <div className="code-box-demo">
        <TableEditRowDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-nested-table">
      <h2>NestedTable 嵌套子表格</h2>
      <div className="code-box-demo">
        <TableNestedTableDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-drag-sorting">
      <h2>DragSorting 拖拽排序</h2>
      <div className="code-box-demo">
        <TableDragSortingDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-drag-sorting-handler">
      <h2>DragSortingHandler 拖拽手柄列</h2>
      <div className="code-box-demo">
        <TableDragSortingHandlerDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-ellipsis">
      <h2>Ellipsis 单元格自动省略</h2>
      <div className="code-box-demo">
        <TableEllipsisDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-ellipsis-custom-tooltip">
      <h2>EllipsisCustomTooltip 自定义单元格省略提示</h2>
      <div className="code-box-demo">
        <TableEllipsisCustomTooltipDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-summary">
      <h2>Summary 总结栏</h2>
      <div className="code-box-demo">
        <TableSummaryDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-virtual-list">
      <h2>VirtualList 虚拟列表</h2>
      <div className="code-box-demo">
        <TableVirtualListDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-responsive">
      <h2>Responsive 响应式</h2>
      <div className="code-box-demo">
        <TableResponsiveDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-pagination">
      <h2>Pagination 分页设置</h2>
      <div className="code-box-demo">
        <TablePaginationDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-sticky">
      <h2>Sticky 随页面滚动的固定表头和滚动条</h2>
      <div className="code-box-demo">
        <TableStickyDemo />
      </div>
    </div>
    <hr />
    <div id="components-table-demo-dynamic-settings">
      <h2>DynamicSettings 动态控制表格属性</h2>
      <div className="code-box-demo">
        <TableDynamicSettingsDemo />
      </div>
    </div>
    <hr />
  </div>
);
export default TableDemo;
