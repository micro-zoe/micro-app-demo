import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarBasicExample } from './toolbar-basic/toolbar-basic-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import { MaterialComponentDemoToolbar } from './app-material-component-demo-toolbar';

@NgModule({
  declarations: [
    ToolbarBasicExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    MaterialComponentDemoToolbar,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [MaterialComponentDemoToolbar],
})
export class MaterialComponentDemoToolbarModule { }
