import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo15Component } from './demo15.component';

describe('Demo15Component', () => {
  let component: Demo15Component;
  let fixture: ComponentFixture<Demo15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
