import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module'
import { MaterialComponent } from './material.component';
import { MaterialComponentDemoAutocompleteModule } from './components/autocomplete/app-material-component-demo-autocomplete.module';
import { MaterialComponentDemoBadgeModule } from './components/badge/app-material-component-demo-badge.module';
import { MaterialComponentDemoBottomSheetModule } from './components/bottom-sheet/app-material-component-demo-bottom-sheet.module';
import { MaterialComponentDemoButtonModule } from './components/button/app-material-component-demo-button.module';

@NgModule({
  declarations: [
    MaterialComponent,
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MaterialComponentDemoAutocompleteModule,
    MaterialComponentDemoBadgeModule,
    MaterialComponentDemoBottomSheetModule,
    MaterialComponentDemoButtonModule,
  ],
})
export class MaterialModule { }