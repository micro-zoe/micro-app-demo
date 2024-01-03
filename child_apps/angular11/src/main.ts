import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare global {
  interface Window {
    microApp: any
    mount: CallableFunction
    unmount: CallableFunction
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_ROUTE__: string
  }
}

// 与基座的数据交互
function handleMicroData () {
  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    console.log('child-angular11 getData:', window.microApp.getData());

    // 监听基座下发的数据变化
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      console.log('child-angular11 addDataListener:', data);
    })

    // 向基座发送数据
    setTimeout(() => {
      window.microApp.dispatch({ myname: 'child-angular11' });
    }, 3000)
  }
}

// ----------分割线---默认模式------两种模式任选其一-----放开注释即可运行------- //
// let app = null;
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then((res: NgModuleRef<AppModule>) => {
//     app = res
//   })
//   .catch(err => console.error(err))

// console.log('微应用child-angular11渲染了');

// handleMicroData()

// // 监听卸载操作
// window.addEventListener('unmount', function () {
//   app.destroy();
//   app = null;
//   console.log('微应用child-angular11卸载了');
// })


// ----------分割线---umd模式------两种模式任选其一-------------- //
let app: void | NgModuleRef<AppModule>
// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((res: NgModuleRef<AppModule>) => {
      app = res
    })
    .catch(err => console.error(err))

  console.log('微应用child-angular11渲染了');

  handleMicroData()
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
window.unmount = () => {
  // angular在部分场景下执行destroy时会删除根元素app-root，导致在此渲染时报错，此时可删除app.destroy()来避免这个问题
  app && app.destroy();
  app = undefined;
  console.log('微应用child-angular11卸载了');
}

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}

window.addEventListener('popstate', () => {
  console.log(11111111)
})
