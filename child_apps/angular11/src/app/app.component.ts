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
      router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          // 更新currentRoute
          this.currentRoute = e.url;
          /**
           * 子应用跳转后向主应用发送PopStateEvent事件，使主应用响应路由变化，触发侧边栏高亮
           * NOTE: 实际项目中并不一定需要，根据实际情况而定
           */
          (window as any).rawWindow.dispatchEvent(new PopStateEvent('popstate', { state: null }))
        }
      });

      // BUG FIX: 解决点击浏览器前进、返回按钮，上一个页面不卸载的问题
      window.addEventListener('popstate', () => {
        const fullPath = window.location.pathname.replace(window.__MICRO_APP_BASE_ROUTE__, '') + location.search + location.hash
        this.ngZone.run(() => {
          this.router.navigateByUrl(fullPath)
        })
      })
    }
  }

  routes = [
    { path: '/', title: 'Home' },
    { path: '/material', title: 'Material UI' },
  ];

  // currentRoute用于设置顶部tab的高亮
  currentRoute = (() => {
    const currentPath = window.location.pathname.replace(window.__MICRO_APP_BASE_ROUTE__ || '/child/angular11', '') || '/';
    return this.routes
      .filter(route => currentPath.startsWith(route.path))
      .sort((r1, r2) => r2.path.length - r1.path.length)
      ?.[0]
      ?.path
      ?? '/';
  })();
}
