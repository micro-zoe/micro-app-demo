import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module'
import { MaterialComponent } from './material.component';
import { MaterialComponentDemoAutocompleteModule } from './components/autocomplete/app-material-component-demo-autocomplete.module'


@NgModule({
  declarations: [
    MaterialComponent,
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MaterialComponentDemoAutocompleteModule,
  ],
})
export class MaterialModule { }
