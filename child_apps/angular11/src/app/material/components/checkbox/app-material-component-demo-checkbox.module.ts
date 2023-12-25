import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { CheckboxConfigurableExample } from './checkbox-configurable/checkbox-configurable-example';
import { CheckboxOverviewExample } from './checkbox-overview/checkbox-overview-example';
import { MaterialComponentDemoCheckbox } from './app-material-component-demo-checkbox';

@NgModule({
  declarations: [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    MaterialComponentDemoCheckbox,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  exports: [MaterialComponentDemoCheckbox],
})
export class MaterialComponentDemoCheckboxModule { }
