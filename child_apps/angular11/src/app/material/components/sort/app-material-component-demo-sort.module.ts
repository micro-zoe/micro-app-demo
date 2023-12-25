import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';

import { SortOverviewExample } from './sort-overview/sort-overview-example';
import { MaterialComponentDemoSort } from './app-material-component-demo-sort';

@NgModule({
  declarations: [
    SortOverviewExample,
    MaterialComponentDemoSort,
  ],
  imports: [
    CommonModule,
    MatSortModule,
  ],
  exports: [MaterialComponentDemoSort],
})
export class MaterialComponentDemoSortModule { }
