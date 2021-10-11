import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular11',
  templateUrl: './angular11.component.html',
  styleUrls: ['./angular11.component.sass']
})
export class Angular11Component implements OnInit {

  constructor() {}

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-angular11 创建了')
  }

  handleMount (): void {
    console.log('child-angular11 渲染了')
  }

  handleUnMount (): void {
    console.log('child-angular11 卸载了')
  }
}
