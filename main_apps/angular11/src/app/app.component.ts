import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import config from '../config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private router: Router, private ngZone: NgZone) {}

  url = `${config.sidebar}/child-sidebar/`

  // sidebar data数据
  sidebarData = {
    pushState: (path: string) => {
      this.ngZone.run(() => {
        this.router.navigate([path])
      })
    }
  }
}
