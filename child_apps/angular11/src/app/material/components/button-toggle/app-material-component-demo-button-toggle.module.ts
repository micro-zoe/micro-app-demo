import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { ButtonToggleAppearanceExample } from './button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from './button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleFormsExample } from './button-toggle-forms/button-toggle-forms-example';
import { ButtonToggleOverviewExample } from './button-toggle-overview/button-toggle-overview-example';
import { MaterialComponentDemoButtonToggle } from './app-material-component-demo-button-toggle';

@NgModule({
  declarations: [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleFormsExample,
    ButtonToggleOverviewExample,
    MaterialComponentDemoButtonToggle,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  exports: [MaterialComponentDemoButtonToggle],
})
export class MaterialComponentDemoButtonToggleModule { }
