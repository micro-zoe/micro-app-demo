import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuxtjs2Component } from './nuxtjs2.component';

describe('Nuxtjs2Component', () => {
  let component: Nuxtjs2Component;
  let fixture: ComponentFixture<Nuxtjs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nuxtjs2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nuxtjs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
