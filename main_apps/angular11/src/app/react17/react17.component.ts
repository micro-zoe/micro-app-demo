import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-react17',
  templateUrl: './react17.component.html',
  styleUrls: ['./react17.component.sass']
})
export class React17Component implements OnInit {

  constructor() { }

  url = `${config.react17}/child/react17/`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-react17 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-react17 即将被渲染')
  }

  handleMount (): void {
    console.log('child-react17 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-react17 卸载了')
  }

  handleError (): void {
    console.log('child-react17 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-react17 的数据:', e.detail.data)
  }

}
