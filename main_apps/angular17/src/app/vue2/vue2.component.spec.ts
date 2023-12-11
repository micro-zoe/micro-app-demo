import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vue2Component } from './vue2.component';

describe('Vue2Component', () => {
  let component: Vue2Component;
  let fixture: ComponentFixture<Vue2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vue2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
