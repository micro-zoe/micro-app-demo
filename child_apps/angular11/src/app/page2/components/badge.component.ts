import { Component } from '@angular/core';

@Component({
  selector: 'app-component-material-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
