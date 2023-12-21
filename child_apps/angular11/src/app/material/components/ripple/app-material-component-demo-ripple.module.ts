import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RippleOverviewExample } from './ripple-overview/ripple-overview-example';
import { MaterialComponentDemoRipple } from './app-material-component-demo-ripple';

@NgModule({
  declarations: [
    RippleOverviewExample,
    MaterialComponentDemoRipple,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [MaterialComponentDemoRipple],
})
export class MaterialComponentDemoRippleModule { }
