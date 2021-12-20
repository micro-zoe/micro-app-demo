import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-nuxtjs2',
  templateUrl: './nuxtjs2.component.html',
  styleUrls: ['./nuxtjs2.component.sass']
})
export class Nuxtjs2Component implements OnInit {

  constructor() { }

  url = `${config.nuxtjs2}/main-angular11/app-nuxtjs2`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-nuxtjs2 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-nuxtjs2 即将被渲染')
  }

  handleMount (): void {
    console.log('child-nuxtjs2 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-nuxtjs2 卸载了')
  }

  handleError (): void {
    console.log('child-nuxtjs2 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-nuxtjs2 的数据:', e.detail.data)
  }

}
