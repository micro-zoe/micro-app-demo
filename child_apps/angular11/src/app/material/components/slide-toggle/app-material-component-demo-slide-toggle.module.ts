import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SlideToggleConfigurableExample } from './slide-toggle-configurable/slide-toggle-configurable-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SlideToggleOverviewExample } from './slide-toggle-overview/slide-toggle-overview-example';
import { MaterialComponentDemoSlideToggle } from './app-material-component-demo-slide-toggle';

@NgModule({
  declarations: [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
    MaterialComponentDemoSlideToggle,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
  ],
  exports: [MaterialComponentDemoSlideToggle],
})
export class MaterialComponentDemoSlideToggleModule { }
