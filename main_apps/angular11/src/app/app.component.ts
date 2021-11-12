import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import microApp from '@micro-zoe/micro-app'
import config from '../config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router, private ngZone: NgZone) {}

  url = `${config.sidebar}/child-sidebar/`

  // sidebar data数据
  sidebarData = {
    // 子应用控制基座路由跳转
    pushState: (path: string, hash?: string) => {
      this.ngZone.run(() => {
        // 只有vite子应用才会传递hash值
        this.router.navigate([path], { fragment: hash ?? null })
      })
    },
    jumpChildPage: (appName: string, path: string) => {
      // 下发通知到子应用
      microApp.setData(appName, { path })
    }
  }
}
