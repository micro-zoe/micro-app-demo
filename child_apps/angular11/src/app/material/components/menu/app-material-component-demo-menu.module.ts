import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MenuIconsExample } from './menu-icons/menu-icons-example';
import { MenuNestedExample } from './menu-nested/menu-nested-example';
import { MenuOverviewExample } from './menu-overview/menu-overview-example';
import { MenuPositionExample } from './menu-position/menu-position-example';
import { MaterialComponentDemoMenu } from './app-material-component-demo-menu';

@NgModule({
  declarations: [
    MenuIconsExample,
    MenuNestedExample,
    MenuOverviewExample,
    MenuPositionExample,
    MaterialComponentDemoMenu,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [MaterialComponentDemoMenu],
})
export class MaterialComponentDemoMenuModule { }
