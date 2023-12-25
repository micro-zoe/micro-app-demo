import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SidenavAutosizeExample } from './sidenav-autosize/sidenav-autosize-example';
import { SidenavBackdropExample } from './sidenav-backdrop/sidenav-backdrop-example';
import { SidenavDisableCloseExample } from './sidenav-disable-close/sidenav-disable-close-example';
import { SidenavDrawerOverviewExample } from './sidenav-drawer-overview/sidenav-drawer-overview-example';
import { SidenavFixedExample } from './sidenav-fixed/sidenav-fixed-example';
import { SidenavModeExample } from './sidenav-mode/sidenav-mode-example';
import { SidenavOpenCloseExample } from './sidenav-open-close/sidenav-open-close-example';
import { SidenavOverviewExample } from './sidenav-overview/sidenav-overview-example';
import { SidenavPositionExample } from './sidenav-position/sidenav-position-example';
import { SidenavResponsiveExample } from './sidenav-responsive/sidenav-responsive-example';
import { MaterialComponentDemoSidenav } from './app-material-component-demo-sidenav';

@NgModule({
  declarations: [
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
    MaterialComponentDemoSidenav,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [MaterialComponentDemoSidenav],
})
export class MaterialComponentDemoSidenavModule { }
