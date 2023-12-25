import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { ExpansionExpandCollapseAllExample } from './expansion-expand-collapse-all/expansion-expand-collapse-all-example';
import { ExpansionOverviewExample } from './expansion-overview/expansion-overview-example';
import { ExpansionStepsExample } from './expansion-steps/expansion-steps-example';
import { MaterialComponentDemoExpansion } from './app-material-component-demo-expansion';

@NgModule({
  declarations: [
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
    MaterialComponentDemoExpansion,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
  ],
  exports: [MaterialComponentDemoExpansion],
})
export class MaterialComponentDemoExpansionModule { }
