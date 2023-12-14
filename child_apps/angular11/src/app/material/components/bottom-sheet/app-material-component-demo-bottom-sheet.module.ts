import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { BottomSheetOverviewExample } from './bottom-sheet-overview/bottom-sheet-overview-example';
import { BottomSheetOverviewExampleSheet } from './bottom-sheet-overview/bottom-sheet-overview-example';
import { MaterialComponentDemoBottomSheet } from './app-material-component-demo-bottom-sheet';

@NgModule({
  declarations: [
    BottomSheetOverviewExample,
    BottomSheetOverviewExampleSheet,
    MaterialComponentDemoBottomSheet,
  ],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  exports: [MaterialComponentDemoBottomSheet],
})
export class MaterialComponentDemoBottomSheetModule { }
