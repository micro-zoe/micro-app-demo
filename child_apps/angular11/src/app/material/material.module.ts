import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

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
import { MaterialComponentDemoRadioModule } from './components/radio/app-material-component-demo-radio.module';
import { MaterialComponentDemoRippleModule } from './components/ripple/app-material-component-demo-ripple.module';
import { MaterialComponentDemoSelectModule } from './components/select/app-material-component-demo-select.module';
import { MaterialComponentDemoSidenavModule } from './components/sidenav/app-material-component-demo-sidenav.module';
import { MaterialComponentDemoSlideToggleModule } from './components/slide-toggle/app-material-component-demo-slide-toggle.module';
import { MaterialComponentDemoSliderModule } from './components/slider/app-material-component-demo-slider.module';
import { MaterialComponentDemoSnackBarModule } from './components/snack-bar/app-material-component-demo-snack-bar.module';
import { MaterialComponentDemoSortModule } from './components/sort/app-material-component-demo-sort.module';
import { MaterialComponentDemoStepperModule } from './components/stepper/app-material-component-demo-stepper.module';
import { MaterialComponentDemoTableModule } from './components/table/app-material-component-demo-table.module';
import { MaterialComponentDemoTabsModule } from './components/tabs/app-material-component-demo-tabs.module';
import { MaterialComponentDemoToolbarModule } from './components/toolbar/app-material-component-demo-toolbar.module';
import { MaterialComponentDemoTooltipModule } from './components/tooltip/app-material-component-demo-tooltip.module';
import { MaterialComponentDemoTreeModule } from './components/tree/app-material-component-demo-tree.module';

@NgModule({
  declarations: [
    MaterialComponent,
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatListModule,
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
    MaterialComponentDemoRadioModule,
    MaterialComponentDemoRippleModule,
    MaterialComponentDemoSelectModule,
    MaterialComponentDemoSidenavModule,
    MaterialComponentDemoSlideToggleModule,
    MaterialComponentDemoSliderModule,
    MaterialComponentDemoSnackBarModule,
    MaterialComponentDemoSortModule,
    MaterialComponentDemoStepperModule,
    MaterialComponentDemoTableModule,
    MaterialComponentDemoTabsModule,
    MaterialComponentDemoToolbarModule,
    MaterialComponentDemoTooltipModule,
    MaterialComponentDemoTreeModule,
  ],
})
export class MaterialModule { }
