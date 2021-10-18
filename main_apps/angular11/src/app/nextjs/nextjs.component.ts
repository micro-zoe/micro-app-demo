import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextjs',
  templateUrl: './nextjs.component.html',
  styleUrls: ['./nextjs.component.sass']
})
export class NextjsComponent implements OnInit {

  constructor() {}

  url = 'http://localhost:4002' + location.pathname

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-nextjs 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-nextjs 即将被渲染')
  }

  handleMount (): void {
    console.log('child-nextjs 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-nextjs 卸载了')
  }

  handleError (): void {
    console.log('child-nextjs 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-nextjs 的数据:', e.detail.data)
  }
}
