import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuxtjs',
  templateUrl: './nuxtjs.component.html',
  styleUrls: ['./nuxtjs.component.sass']
})
export class NuxtjsComponent implements OnInit {

  constructor() { }

  url = 'http://localhost:4003' + location.pathname

  ngOnInit(): void {
  }

}
