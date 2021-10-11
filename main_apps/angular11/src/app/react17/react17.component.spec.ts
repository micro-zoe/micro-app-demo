import { ComponentFixture, TestBed } from '@angular/core/testing';

import { React17Component } from './react17.component';

describe('React17Component', () => {
  let component: React17Component;
  let fixture: ComponentFixture<React17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ React17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(React17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
