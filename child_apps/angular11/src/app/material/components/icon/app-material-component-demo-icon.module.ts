import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { IconOverviewExample } from './icon-overview/icon-overview-example';
import { IconSvgExample } from './icon-svg/icon-svg-example';
import { MaterialComponentDemoIcon } from './app-material-component-demo-icon';

@NgModule({
  declarations: [
    IconOverviewExample,
    IconSvgExample,
    MaterialComponentDemoIcon,
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [MaterialComponentDemoIcon],
})
export class MaterialComponentDemoIconModule { }
