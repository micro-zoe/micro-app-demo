import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import microApp from '@micro-zoe/micro-app'

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

microApp.start({
  plugins: {
    modules: {
      // 适配vite
      'vite': [
        {
          loader(code: string) {
            if (!environment.production) {
              // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
                return all.replace('/child/vite/', 'http://localhost:4007/child/vite/')
              })
            }

            return code
          }
        }
      ],
    }
  }
})

bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));
