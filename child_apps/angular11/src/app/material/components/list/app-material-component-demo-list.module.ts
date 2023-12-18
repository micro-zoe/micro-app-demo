import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
import { ListSingleSelectionExample } from './list-single-selection/list-single-selection-example';
import { MaterialComponentDemoList } from './app-material-component-demo-list';

@NgModule({
  declarations: [
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
    MaterialComponentDemoList,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
  ],
  exports: [MaterialComponentDemoList],
})
export class MaterialComponentDemoListModule { }
