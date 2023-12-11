import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Angular11Component } from './angular11/angular11.component';
import { Nextjs11Component } from './nextjs11/nextjs11.component';
import { Nuxtjs2Component } from './nuxtjs2/nuxtjs2.component';
import { React16Component } from './react16/react16.component';
import { React18Component } from './react18/react18.component';
import { ViteComponent } from './vite/vite.component';
import { Vue2Component } from './vue2/vue2.component';
import { Vue3Component } from './vue3/vue3.component';

export const routes: Routes = [
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
    path: 'app-react18',
    children: [{
      path: '**',
      component: React18Component
    }]
  },
  {
    path: 'app-vite',
    children: [{
      path: '**',
      component: ViteComponent
    }]
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
