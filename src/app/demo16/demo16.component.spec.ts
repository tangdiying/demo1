import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16Component } from './demo16.component';

describe('Demo16Component', () => {
  let component: Demo16Component;
  let fixture: ComponentFixture<Demo16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
