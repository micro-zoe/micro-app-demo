import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-nextjs11',
  templateUrl: './nextjs11.component.html',
  styleUrls: ['./nextjs11.component.sass']
})
export class Nextjs11Component implements OnInit {

  constructor() {}

  url = `${config.nextjs11}/main-angular11/app-nextjs11`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-nextjs11 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-nextjs11 即将被渲染')
  }

  handleMount (): void {
    console.log('child-nextjs11 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-nextjs11 卸载了')
  }

  handleError (): void {
    console.log('child-nextjs11 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-nextjs11 的数据:', e.detail.data)
  }
}
