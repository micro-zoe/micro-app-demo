import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'page2',
    component: Page2Component,
    children: [{
      path: '**',
      component: Page2Component
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
