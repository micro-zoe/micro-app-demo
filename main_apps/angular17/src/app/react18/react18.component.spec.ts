import { ComponentFixture, TestBed } from '@angular/core/testing';

import { React18Component } from './react18.component';

describe('React18Component', () => {
  let component: React18Component;
  let fixture: ComponentFixture<React18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ React18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(React18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
