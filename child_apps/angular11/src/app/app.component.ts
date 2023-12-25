import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router, private ngZone: NgZone) {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      /**
       * 子应用跳转后向主应用发送PopStateEvent事件，使主应用响应路由变化，触发侧边栏高亮
       * NOTE: 实际项目中并不一定需要，根据实际情况而定
       */
      router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          (window as any).rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
        }
      });
    }
    // 此处用于监听基座下发的跳转指令
    window.microApp?.addDataListener((data: Record<string, unknown>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== this.router.url) {
        router.navigate([data.path])
      }
    })
  }

  routes = [
    { path: '/', title: 'Home' },
    { path: '/material', title: 'Material UI 11.x' },
  ];
  currentRoute = (() => {
    const currentPath = window.location.pathname.replace((window as any).__MICRO_APP_BASE_ROUTE__ || '/child/angular11', '') || '/';
    return this.routes
      .filter(route => currentPath.startsWith(route.path))
      .sort((r1, r2) => r2.path.length - r1.path.length)
      ?.[0]
      ?.path
      ?? '/';
  })();

  // 子应用内部跳转时，通知侧边栏改变菜单状态
  onRouteChange (routePath: string): void {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 发送全局数据，通知侧边栏修改菜单展示
      window.microApp.setGlobalData({ name: window.__MICRO_APP_NAME__ })
    }
    this.currentRoute = routePath;
  }
}
