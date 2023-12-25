import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

import { SliderConfigurableExample } from './slider-configurable/slider-configurable-example';
import { SliderFormattingExample } from './slider-formatting/slider-formatting-example';
import { SliderOverviewExample } from './slider-overview/slider-overview-example';
import { MaterialComponentDemoSlider } from './app-material-component-demo-slider';

@NgModule({
  declarations: [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderOverviewExample,
    MaterialComponentDemoSlider,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
  ],
  exports: [MaterialComponentDemoSlider],
})
export class MaterialComponentDemoSliderModule { }
