import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { DialogContentExample } from './dialog-content/dialog-content-example';
import { DialogContentExampleDialog } from './dialog-content/dialog-content-example';
import { DialogDataExample } from './dialog-data/dialog-data-example';
import { DialogDataExampleDialog } from './dialog-data/dialog-data-example';
import { DialogElementsExample } from './dialog-elements/dialog-elements-example';
import { DialogElementsExampleDialog } from './dialog-elements/dialog-elements-example';
import { DialogFromMenuExample } from './dialog-from-menu/dialog-from-menu-example';
import { DialogFromMenuExampleDialog } from './dialog-from-menu/dialog-from-menu-example';
import { DialogOverviewExample } from './dialog-overview/dialog-overview-example';
import { DialogOverviewExampleDialog } from './dialog-overview/dialog-overview-example';
import { MaterialComponentDemoDialog } from './app-material-component-demo-dialog';

@NgModule({
  declarations: [
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogFromMenuExample,
    DialogFromMenuExampleDialog,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    MaterialComponentDemoDialog,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
  ],
  exports: [MaterialComponentDemoDialog],
})
export class MaterialComponentDemoDialogModule { }
