import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Angular11Component } from './angular11/angular11.component';
import { Nextjs11Component } from './nextjs11/nextjs11.component';
import { Nuxtjs2Component } from './nuxtjs2/nuxtjs2.component';
import { React16Component } from './react16/react16.component';
import { React17Component } from './react17/react17.component';
import { ViteComponent } from './vite/vite.component';
import { Vue2Component } from './vue2/vue2.component';
import { Vue3Component } from './vue3/vue3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-angular11',
    children: [{
      path: '**',
      component: Angular11Component
    }]
  },
  {
    path: 'app-nextjs11',
    children: [{
      path: '**',
      component: Nextjs11Component
    }]
  },
  {
    path: 'app-nuxtjs2',
    children: [{
      path: '**',
      component: Nuxtjs2Component
    }]
  },
  {
    path: 'app-react16',
    children: [{
      path: '**',
      component: React16Component
    }]
  },
  {
    // 因为主应用为history路由，appname-react17子应用是hash路由，所以不需要设置基础路由，这里正常设置
    path: 'app-react17',
    component: React17Component
  },
  {
    // 因为主应用为history路由，appname-vite子应用是hash路由，所以不需要设置基础路由，这里正常设置
    path: 'app-vite',
    component: ViteComponent
  },
  {
    path: 'app-vue2',
    children: [{
      path: '**',
      component: Vue2Component
    }]
  },
  {
    path: 'app-vue3',
    children: [{
      path: '**',
      component: Vue3Component
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // 设置主应用基础路由为main-angular11(用于后续部署)，则子应用基础路由(baseroute)为/main-angular11/xxx
  providers: [{ provide: APP_BASE_HREF, useValue: '/main-angular11'}]
})
export class AppRoutingModule { }
