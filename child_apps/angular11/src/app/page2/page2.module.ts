import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { Page2RoutingModule } from './page2-routing.module'
import { Page2Component } from './page2.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';


@NgModule({
  declarations: [
    Page2Component,
    AutocompleteComponent,
  ],
  imports: [
    CommonModule,
    Page2RoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ]
})
export class Page2Module { }
