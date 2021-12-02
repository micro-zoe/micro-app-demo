import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import microApp, { getActiveApps } from '@micro-zoe/micro-app'
import config from '../config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router, private ngZone: NgZone) {}

  url = `${config.sidebar}/child/sidebar/`

  // 👇 主应用向sidebar子应用下发一个名为pushState的方法
  sidebarData = {
    // 子应用sidebar通过pushState控制主应用跳转
    pushState: (appName: string, path: string, hash: string) => {
      /**
       * 当子应用还未渲染，通过主应用控制路由跳转，子应用在初始化时会自己根据url渲染对应的页面
       * 当子应用已经渲染，则直接控制子应用进行内部跳转
       *
       * getActiveApps: 用于获取正在运行的子应用
       */
      if (!getActiveApps().includes(appName)) {
        // 主应用跳转
        this.ngZone.run(() => {
          // child-vite 和 child-react17子应用为hash路由，这里通过fragment设置hash值
          this.router.navigate([path], { fragment: hash ?? null })
        })
      } else {
        let childPath = null
        // child-vite 和 child-react17子应用是hash路由，hash值就是它的页面地址，这里单独处理
        if (hash) {
          childPath = hash
        } else {
          // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
          childPath = path.replace(/^\/app-[^/]+/, '')
          !childPath && (childPath = '/') // 防止地址为空
        }
        // 主应用通过下发data数据控制子应用跳转
        microApp.setData(appName, { path: childPath })
      }
    },
  }
}
