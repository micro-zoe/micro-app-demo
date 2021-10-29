import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.sass']
})
export class Page2Component implements OnInit {

  constructor() { }

  btnColor = 'red'

  ngOnInit(): void {
  }

  changeColor () {
    this.btnColor = this.btnColor === 'red' ? 'blue' : 'red'
  }
}
