import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Angular11Component } from './angular11/angular11.component';
import { Nextjs11Component } from './nextjs11/nextjs11.component';
import { Nuxtjs2Component } from './nuxtjs2/nuxtjs2.component';
import { React16Component } from './react16/react16.component';
import { React17Component } from './react17/react17.component';
import { ViteComponent } from './vite/vite.component';
import { Vue2Component } from './vue2/vue2.component';
import { Vue3Component } from './vue3/vue3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Angular11Component,
    Nextjs11Component,
    Nuxtjs2Component,
    React16Component,
    React17Component,
    ViteComponent,
    Vue2Component,
    Vue3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
