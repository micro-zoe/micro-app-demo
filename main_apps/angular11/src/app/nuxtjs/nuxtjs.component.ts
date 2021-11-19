import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-nuxtjs',
  templateUrl: './nuxtjs.component.html',
  styleUrls: ['./nuxtjs.component.sass']
})
export class NuxtjsComponent implements OnInit {

  constructor() { }

  url = `${config.nuxtjs}/main-angular11/app-nuxtjs`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-nuxtjs 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-nuxtjs 即将被渲染')
  }

  handleMount (): void {
    console.log('child-nuxtjs 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-nuxtjs 卸载了')
  }

  handleError (): void {
    console.log('child-nuxtjs 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-nuxtjs 的数据:', e.detail.data)
  }

}
