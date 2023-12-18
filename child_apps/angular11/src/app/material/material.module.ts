import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module'
import { MaterialComponent } from './material.component';
import { MaterialComponentDemoAutocompleteModule } from './components/autocomplete/app-material-component-demo-autocomplete.module';
import { MaterialComponentDemoBadgeModule } from './components/badge/app-material-component-demo-badge.module';
import { MaterialComponentDemoBottomSheetModule } from './components/bottom-sheet/app-material-component-demo-bottom-sheet.module';
import { MaterialComponentDemoButtonModule } from './components/button/app-material-component-demo-button.module';
import { MaterialComponentDemoButtonToggleModule } from './components/button-toggle/app-material-component-demo-button-toggle.module';
import { MaterialComponentDemoCardModule } from './components/card/app-material-component-demo-card.module';
import { MaterialComponentDemoCheckboxModule } from './components/checkbox/app-material-component-demo-checkbox.module';
import { MaterialComponentDemoChipsModule } from './components/chips/app-material-component-demo-chips.module';

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
    MaterialComponentDemoButtonToggleModule,
    MaterialComponentDemoCardModule,
    MaterialComponentDemoCheckboxModule,
    MaterialComponentDemoChipsModule,
  ],
})
export class MaterialModule { }
