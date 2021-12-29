import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router, private ngZone: NgZone) {
    // 此处用于监听基座下发的跳转指令
    window.microApp?.addDataListener((data: Record<string, unknown>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== this.router.url) {
        router.navigate([data.path])
      }
    })
  }

  // 子应用内部跳转时，通知侧边栏改变菜单状态
  onRouteChange (e): void {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 发送全局数据，通知侧边栏修改菜单展示
      window.microApp.setGlobalData({ name: window.__MICRO_APP_NAME__ })
    }
  }
}
