import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router, private ngZone: NgZone) {
    // 此处用于监听基座下发的跳转指令
    window.microApp?.addDataListener((data: Record<string, unknown>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== router.url) {
        router.navigate([data.path])
      }
    })
  }
}
