import { ComponentFixture, TestBed } from '@angular/core/testing';

import { React16Component } from './react16.component';

describe('React16Component', () => {
  let component: React16Component;
  let fixture: ComponentFixture<React16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ React16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(React16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
