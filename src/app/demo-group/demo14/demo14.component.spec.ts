import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo14Component } from './demo14.component';

describe('Demo14Component', () => {
  let component: Demo14Component;
  let fixture: ComponentFixture<Demo14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
