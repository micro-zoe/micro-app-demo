import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import { MaterialComponentDemoGridList } from './app-material-component-demo-grid-list';

@NgModule({
  declarations: [
    GridListDynamicExample,
    GridListOverviewExample,
    MaterialComponentDemoGridList,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  exports: [MaterialComponentDemoGridList],
})
export class MaterialComponentDemoGridListModule { }
