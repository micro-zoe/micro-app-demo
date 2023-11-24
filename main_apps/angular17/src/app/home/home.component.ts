import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [CommonModule],
})
export class HomeComponent implements OnInit {
  title = 'angular17';
  constructor() { }

  ngOnInit(): void {
  }

}
