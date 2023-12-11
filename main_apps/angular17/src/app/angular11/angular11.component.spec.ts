import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular11Component } from './angular11.component';

describe('Angular11Component', () => {
  let component: Angular11Component;
  let fixture: ComponentFixture<Angular11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
