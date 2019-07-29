import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo18Component } from './demo18.component';

describe('Demo18Component', () => {
  let component: Demo18Component;
  let fixture: ComponentFixture<Demo18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
