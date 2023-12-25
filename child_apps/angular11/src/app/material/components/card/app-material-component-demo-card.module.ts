import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CardFancyExample } from './card-fancy/card-fancy-example';
import { CardOverviewExample } from './card-overview/card-overview-example';
import { MaterialComponentDemoCard } from './app-material-component-demo-card';

@NgModule({
  declarations: [
    CardFancyExample,
    CardOverviewExample,
    MaterialComponentDemoCard,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [MaterialComponentDemoCard],
})
export class MaterialComponentDemoCardModule { }
