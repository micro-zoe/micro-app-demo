import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginatorConfigurableExample } from './paginator-configurable/paginator-configurable-example';
import { PaginatorOverviewExample } from './paginator-overview/paginator-overview-example';
import { MaterialComponentDemoPaginator } from './app-material-component-demo-paginator';

@NgModule({
  declarations: [
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
    MaterialComponentDemoPaginator,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  exports: [MaterialComponentDemoPaginator],
})
export class MaterialComponentDemoPaginatorModule { }
