import "./public-path";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare global {
  interface Window {
    microApp: any
  }
}

if (environment.production) {
  enableProdMode();
}

console.log('from child-angular11 getData:', window.microApp?.getData())

window.microApp?.addDataListener((data: any) => {
  console.log('from child-angular11 addDataListener:', window.microApp?.getData())
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
