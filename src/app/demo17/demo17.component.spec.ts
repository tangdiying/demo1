import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17Component } from './demo17.component';

describe('Demo17Component', () => {
  let component: Demo17Component;
  let fixture: ComponentFixture<Demo17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
