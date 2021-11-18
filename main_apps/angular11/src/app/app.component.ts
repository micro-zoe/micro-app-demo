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

  // 👇 主应用向sidebar子应用下发一个名为pushState的方法
  sidebarData = {
    // 子应用sidebar 通过pushState控制主应用跳转
    pushState: (appName: string, path: string, hash: string) => {
      this.ngZone.run(() => {
        // 主应用跳转
        this.router.navigate([path], { fragment: hash ?? null })

        // 主应用控制其它子应用跳转 👇
        if (appName.startsWith('appname-')) { // 判断appName是否正确
          let childPath = null
          // 只有vite子应用是hash路由，hash值就是它的页面地址
          if (hash) {
            childPath = hash
          } else {
            // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
            childPath = path.replace(/^\/app-[^/]+/, '')
            !childPath && (childPath = '/') // 防止地址为空
          }
          microApp.setData(appName, { path: childPath })
        }
      })
    },
  }
}
