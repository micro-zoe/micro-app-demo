import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SnackBarComponentExample } from './snack-bar-component/snack-bar-component-example';
import { PizzaPartyComponent } from './snack-bar-component/snack-bar-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SnackBarPositionExample } from './snack-bar-position/snack-bar-position-example';
import { MaterialComponentDemoSnackBar } from './app-material-component-demo-snack-bar';

@NgModule({
  declarations: [
    SnackBarComponentExample,
    PizzaPartyComponent,
    SnackBarOverviewExample,
    SnackBarPositionExample,
    MaterialComponentDemoSnackBar,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  exports: [MaterialComponentDemoSnackBar],
})
export class MaterialComponentDemoSnackBarModule { }
