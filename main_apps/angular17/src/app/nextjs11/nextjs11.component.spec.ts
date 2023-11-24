import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nextjs11Component } from './nextjs11.component';

describe('Nextjs11Component', () => {
  let component: Nextjs11Component;
  let fixture: ComponentFixture<Nextjs11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nextjs11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nextjs11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
