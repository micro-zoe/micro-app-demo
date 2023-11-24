import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-react18',
  standalone: true,
  templateUrl: './react18.component.html',
  styleUrls: ['./react18.component.sass'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class React18Component implements OnInit {

  constructor() { }

  url = `${config.react18}/child/react18/`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-react18 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-react18 即将被渲染')
  }

  handleMount (): void {
    console.log('child-react18 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-react18 卸载了')
  }

  handleError (): void {
    console.log('child-react18 加载出错了')
  }

  handleDataChange (e: Event): void {
    if (e instanceof CustomEvent) {
      console.log('来自子应用 child-react18 的数据:', e.detail.data)
    }
  }

}
