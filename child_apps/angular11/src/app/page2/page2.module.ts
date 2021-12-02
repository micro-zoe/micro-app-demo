import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module'
import { Page2Component } from './page2.component';


@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
