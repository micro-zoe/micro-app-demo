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
  constructor(private router: Router, private ngZone: NgZone) {
    // @ts-ignore
    window.router = router
  }

  url = `${config.sidebar}/child/sidebar/`

  // 👇 主应用向sidebar子应用下发一个名为pushState的方法
  sidebarData = {
    // 子应用sidebar通过pushState控制主应用跳转
    pushState: (appName: string, parentPath: string, childPath: string) => {
      console.log(1111111, appName, parentPath, childPath, this.router)
      /**
       * ******************************** 注意！********************************
       * 这里展示了如何通过基座的侧边栏控制子应用渲染指定的页面
       * 案例中嵌入了 vue2、vue3、react、vite、angular、next.js、nuxt.js 等多种子应用
       * 其中vite和next.js的跳转方式与其它子应用不同，所以单独处理
       * **********************************************************************
       */
      // 首页没有子应用，执行正常跳转即可
      if (appName === '/') {
        // 主应用跳转
        this.ngZone.run(() => {
          // child-vite 和 child-react17子应用为hash路由，这里通过fragment设置hash值
          this.router.navigate(['/'])
        })
      } else if (appName === 'vite') {
        // this.handleVite(appName, parentPath, childPath)
      } else {
        /**
         * 基座地址变化或者子应用地址变化，执行跳转操作
         * microApp.router.current: 用于获取当前子应用的路由信息
         */
        if (
          this.router.url !== parentPath || // 基座地址变化
          // @ts-ignore
          microApp.router.current.get(appName).fullPath !== childPath // 子应用地址变化
        ) {
          let afterJump = Promise.resolve(true)
          let type = 'replace'
          if (this.router.url !== parentPath) {
            this.ngZone.run(() => {
              afterJump = this.router.navigate([parentPath]) // 基座跳转后，使用 microApp.router.replace 控制子应用跳转
            })
          } else {
            type = 'push' // 基座地址不变，子应用地址变化，使用 microApp.router.push 控制子应用跳转
          }

          // 判断子应用是否存在
          if (getActiveApps().includes(appName)) {
            afterJump.then(() => {
              // 子应用存在，控制子应用跳转
              console.log(444444, window.location.href)
              // @ts-ignore
              microApp.router[type]({
                name: appName,
                path: childPath,
              })
            })
          } else {
            // 子应用不存在，设置defaultPage，控制子应用初次渲染时的默认页面
            // @ts-ignore
            microApp.router.setDefaultPage(appName, childPath)
          }
        }
      }

      // /**
      //  * 当子应用还未渲染，通过主应用控制路由跳转，子应用在初始化时会自己根据url渲染对应的页面
      //  * 当子应用已经渲染，则直接控制子应用进行内部跳转
      //  *
      //  * getActiveApps: 用于获取正在运行的子应用
      //  */
      // if (!getActiveApps().includes(appName)) {
      //   // 主应用跳转
      //   this.ngZone.run(() => {
      //     // child-vite 和 child-react17子应用为hash路由，这里通过fragment设置hash值
      //     this.router.navigate([path], { fragment: hash ?? null })
      //   })
      // } else {
      //   let childPath = null
      //   // child-vite 和 child-react17子应用是hash路由，hash值就是它的页面地址，这里单独处理
      //   if (hash) {
      //     childPath = hash
      //   } else {
      //     // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
      //     childPath = path.replace(/^\/app-[^/]+/, '')
      //     !childPath && (childPath = '/') // 防止地址为空
      //   }
      //   // 主应用通过下发data数据控制子应用跳转
      //   microApp.setData(appName, { path: childPath })
      // }
    },
  }
}
