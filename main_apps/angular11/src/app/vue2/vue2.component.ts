import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-vue2',
  templateUrl: './vue2.component.html',
  styleUrls: ['./vue2.component.sass']
})
export class Vue2Component implements OnInit {

  constructor() { }

  url = `${config.vue2}/child/vue2/`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-vue2 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-vue2 即将被渲染')
  }

  handleMount (): void {
    console.log('child-vue2 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-vue2 卸载了')
  }

  handleError (): void {
    console.log('child-vue2 加载出错了')
  }

  handleDataChange (e: CustomEvent): void {
    console.log('来自子应用 child-vue2 的数据:', e.detail.data)
  }

}
