import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import { MaterialComponentDemoRadio } from './app-material-component-demo-radio';

@NgModule({
  declarations: [
    RadioNgModelExample,
    RadioOverviewExample,
    MaterialComponentDemoRadio,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
  ],
  exports: [MaterialComponentDemoRadio],
})
export class MaterialComponentDemoRadioModule { }
