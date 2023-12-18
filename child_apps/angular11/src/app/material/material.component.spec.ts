import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponent } from './material.component';

describe('Page2Component', () => {
  let component: MaterialComponent;
  let fixture: ComponentFixture<MaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
