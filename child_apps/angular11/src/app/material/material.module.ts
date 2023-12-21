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
import { MaterialComponentDemoDatepickerModule } from './components/datepicker/app-material-component-demo-datepicker.module';
import { MaterialComponentDemoDialogModule } from './components/dialog/app-material-component-demo-dialog.module';
import { MaterialComponentDemoDividerModule } from './components/divider/app-material-component-demo-divider.module';
import { MaterialComponentDemoExpansionModule } from './components/expansion/app-material-component-demo-expansion.module';
import { MaterialComponentDemoFormFieldModule } from './components/form-field/app-material-component-demo-form-field.module';
import { MaterialComponentDemoGridListModule } from './components/grid-list/app-material-component-demo-grid-list.module';
import { MaterialComponentDemoIconModule } from './components/icon/app-material-component-demo-icon.module';
import { MaterialComponentDemoInputModule } from './components/input/app-material-component-demo-input.module';
import { MaterialComponentDemoListModule } from './components/list/app-material-component-demo-list.module';
import { MaterialComponentDemoMenuModule } from './components/menu/app-material-component-demo-menu.module';
import { MaterialComponentDemoPaginatorModule } from './components/paginator/app-material-component-demo-paginator.module';
import { MaterialComponentDemoProgressBarModule } from './components/progress-bar/app-material-component-demo-progress-bar.module';
import { MaterialComponentDemoProgressSpinnerModule } from './components/progress-spinner/app-material-component-demo-progress-spinner.module';

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
    MaterialComponentDemoDatepickerModule,
    MaterialComponentDemoDialogModule,
    MaterialComponentDemoDividerModule,
    MaterialComponentDemoExpansionModule,
    MaterialComponentDemoFormFieldModule,
    MaterialComponentDemoGridListModule,
    MaterialComponentDemoIconModule,
    MaterialComponentDemoInputModule,
    MaterialComponentDemoListModule,
    MaterialComponentDemoMenuModule,
    MaterialComponentDemoPaginatorModule,
    MaterialComponentDemoProgressBarModule,
    MaterialComponentDemoProgressSpinnerModule,
  ],
})
export class MaterialModule { }
