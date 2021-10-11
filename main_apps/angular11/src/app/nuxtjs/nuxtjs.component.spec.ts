import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuxtjsComponent } from './nuxtjs.component';

describe('NuxtjsComponent', () => {
  let component: NuxtjsComponent;
  let fixture: ComponentFixture<NuxtjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuxtjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuxtjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
