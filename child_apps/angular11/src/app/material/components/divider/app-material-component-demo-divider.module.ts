import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { DividerOverviewExample } from './divider-overview/divider-overview-example';
import { MaterialComponentDemoDivider } from './app-material-component-demo-divider';

@NgModule({
  declarations: [
    DividerOverviewExample,
    MaterialComponentDemoDivider,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [MaterialComponentDemoDivider],
})
export class MaterialComponentDemoDividerModule { }
