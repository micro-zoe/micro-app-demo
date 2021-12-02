import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-angular11',
  templateUrl: './angular11.component.html',
  styleUrls: ['./angular11.component.sass']
})
export class Angular11Component implements OnInit {

  constructor() {}

  url = `${config.angular11}/child/angular11/`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-angular11 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-angular11 即将被渲染')
  }

  handleMount (): void {
    console.log('child-angular11 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-angular11 卸载了')
  }

  handleError (): void {
    console.log('child-angular11 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-angular11 的数据:', e.detail.data)
  }
}
