import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import { MaterialComponentDemoBadge } from './app-material-component-demo-badge';

@NgModule({
  declarations: [
    BadgeOverviewExample,
    MaterialComponentDemoBadge,
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
  ],
  exports: [MaterialComponentDemoBadge],
})
export class MaterialComponentDemoBadgeModule { }
