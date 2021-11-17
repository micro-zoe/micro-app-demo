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

  appName: any = null
  // 子应用sidebar data数据
  sidebarData = {
    // 子应用控制基座页面跳转
    pushState: (appName: string, path: string, hash?: string) => {
      this.ngZone.run(() => {
        // 主应用跳转
        this.router.navigate([path], { fragment: hash ?? null })

        // 如果appName存在，则在主应用跳转完成后，通知子应用进行跳转
        if (appName.startsWith('appname-')) {
          if (hash) {
            // 只有vite子应用是hash路由，hash值就是它的页面地址
            path = hash
          } else {
            // path的值形式通常为 /app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
            path = path.replace(/^\/app-[^\/]+/, '')
          }
          microApp.setData(appName, { path })
        }
      })
    },
    // 基座控制子应用页面跳转
    jumpChildPage: (appName: string, path: string) => {
      // 下发通知到子应用
      microApp.setData(appName, { path })
    }
  }
}
