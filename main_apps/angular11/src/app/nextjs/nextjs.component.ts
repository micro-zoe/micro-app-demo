import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextjs',
  templateUrl: './nextjs.component.html',
  styleUrls: ['./nextjs.component.sass']
})
export class NextjsComponent implements OnInit {

  constructor() {}

  url = 'http://localhost:4002' + location.pathname

  ngOnInit(): void {
  }
}
