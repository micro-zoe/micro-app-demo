import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vite',
  templateUrl: './vite.component.html',
  styleUrls: ['./vite.component.sass']
})
export class ViteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * vite 子应用因为沙箱关闭，数据通信功能失效
   */
  handleCreate (): void {
    console.log('child-vite 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-vite 即将被渲染')
  }

  handleMount (): void {
    console.log('child-vite 已经渲染完成')
  }

  handleUnmount (): void {
    console.log('child-vite 卸载了')
  }

  handleError (): void {
    console.log('child-vite 加载出错了')
  }
}
