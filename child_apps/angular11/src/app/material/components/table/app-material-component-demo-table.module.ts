import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TableBasicExample } from './table-basic/table-basic-example';
import { TableDynamicColumnsExample } from './table-dynamic-columns/table-dynamic-columns-example';
import { TableExpandableRowsExample } from './table-expandable-rows/table-expandable-rows-example';
import { TableFilteringExample } from './table-filtering/table-filtering-example';
import { TableFlexBasicExample } from './table-flex-basic/table-flex-basic-example';
import { TableFooterRowExample } from './table-footer-row/table-footer-row-example';
import { TableHttpExample } from './table-http/table-http-example';
import { TableMultipleHeaderFooterExample } from './table-multiple-header-footer/table-multiple-header-footer-example';
import { TableOverviewExample } from './table-overview/table-overview-example';
import { TablePaginationExample } from './table-pagination/table-pagination-example';
import { TableReorderableExample } from './table-reorderable/table-reorderable-example';
import { TableRowContextExample } from './table-row-context/table-row-context-example';
import { TableSelectionExample } from './table-selection/table-selection-example';
import { TableSortingExample } from './table-sorting/table-sorting-example';
import { TableStickyColumnsExample } from './table-sticky-columns/table-sticky-columns-example';
import { TableStickyComplexFlexExample } from './table-sticky-complex-flex/table-sticky-complex-flex-example';
import { TableStickyComplexExample } from './table-sticky-complex/table-sticky-complex-example';
import { TableStickyFooterExample } from './table-sticky-footer/table-sticky-footer-example';
import { TableStickyHeaderExample } from './table-sticky-header/table-sticky-header-example';
import { TableTextColumnAdvancedExample } from './table-text-column-advanced/table-text-column-advanced-example';
import { TableTextColumnExample } from './table-text-column/table-text-column-example';
import { TableWrappedExample } from './table-wrapped/table-wrapped-example';
import { WrapperTable } from './table-wrapped/table-wrapped-example';
import { MaterialComponentDemoTable } from './app-material-component-demo-table';

@NgModule({
  declarations: [
    TableBasicExample,
    TableDynamicColumnsExample,
    TableExpandableRowsExample,
    TableFilteringExample,
    TableFlexBasicExample,
    TableFooterRowExample,
    TableHttpExample,
    TableMultipleHeaderFooterExample,
    TableOverviewExample,
    TablePaginationExample,
    TableReorderableExample,
    TableRowContextExample,
    TableSelectionExample,
    TableSortingExample,
    TableStickyColumnsExample,
    TableStickyComplexFlexExample,
    TableStickyComplexExample,
    TableStickyFooterExample,
    TableStickyHeaderExample,
    TableTextColumnAdvancedExample,
    TableTextColumnExample,
    TableWrappedExample,
    WrapperTable,
    MaterialComponentDemoTable,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
  ],
  exports: [MaterialComponentDemoTable],
})
export class MaterialComponentDemoTableModule { }
