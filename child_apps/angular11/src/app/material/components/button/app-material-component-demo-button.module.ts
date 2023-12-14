import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import { MaterialComponentDemoButton } from './app-material-component-demo-button';

@NgModule({
  declarations: [
    ButtonOverviewExample,
    ButtonTypesExample,
    MaterialComponentDemoButton,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [MaterialComponentDemoButton],
})
export class MaterialComponentDemoButtonModule { }
