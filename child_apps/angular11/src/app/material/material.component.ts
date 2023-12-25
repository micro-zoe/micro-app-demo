import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.sass']
})
export class MaterialComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  currentComponent = window.location.pathname
    .replace((window as any).__MICRO_APP_BASE_ROUTE__ || '/child/angular11', '')
    .replace(/\/material\/?/, '') || 'autocomplete';

  onComponentLinkClick(link: string) {
    this.currentComponent = link;
    this.router.navigate([`/material/${link}`]);
  }
}
