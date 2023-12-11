import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-react16',
  standalone: true,
  templateUrl: './react16.component.html',
  styleUrls: ['./react16.component.sass'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class React16Component implements OnInit {

  constructor() { }

  url = `${config.react16}/child/react16/`

  microAppData = {msg: '来自基座的数据'}

  ngOnInit (): void {
  }

  handleCreate (): void {
    console.log('child-react16 创建了')
  }

  handleBeforeMount (): void {
    console.log('child-react16 即将被渲染')
  }

  handleMount (): void {
    console.log('child-react16 已经渲染完成')

    setTimeout(() => {
      this.microAppData = {msg: '来自基座的新数据'}
    }, 2000)
  }

  handleUnmount (): void {
    console.log('child-react16 卸载了')
  }

  handleError (): void {
    console.log('child-react16 加载出错了')
  }

  handleDataChange (e: Event): void {
    if (e instanceof CustomEvent) {
      console.log('来自子应用 child-react16 的数据:', e.detail.data)
    }
  }

}
