import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page2', component: Page2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  providers: [{ provide: APP_BASE_HREF, useValue: window.__MICRO_APP_BASE_ROUTE__ || '/'}]
})
export class AppRoutingModule { }
