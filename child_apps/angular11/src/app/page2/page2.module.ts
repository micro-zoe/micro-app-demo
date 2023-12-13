import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { Page2RoutingModule } from './page2-routing.module'
import { Page2Component } from './page2.component';
import { AutocompleteComponent } from './components/autocomplete.component';
import { BadgeComponent } from './components/badge.component';
import { BottomSheetComponent, BottomSheetComponentSheet } from './components/bottom-sheet.component';


@NgModule({
  declarations: [
    Page2Component,
    AutocompleteComponent,
    BadgeComponent,
    BottomSheetComponent,
    BottomSheetComponentSheet,
  ],
  imports: [
    CommonModule,
    Page2RoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
  ]
})
export class Page2Module { }
