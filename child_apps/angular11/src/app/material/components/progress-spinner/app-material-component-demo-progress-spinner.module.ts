import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

import { ProgressSpinnerConfigurableExample } from './progress-spinner-configurable/progress-spinner-configurable-example';
import { ProgressSpinnerOverviewExample } from './progress-spinner-overview/progress-spinner-overview-example';
import { MaterialComponentDemoProgressSpinner } from './app-material-component-demo-progress-spinner';

@NgModule({
  declarations: [
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    MaterialComponentDemoProgressSpinner,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
  ],
  exports: [MaterialComponentDemoProgressSpinner],
})
export class MaterialComponentDemoProgressSpinnerModule { }
