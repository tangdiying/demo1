import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13Component } from './demo13.component';

describe('Demo13Component', () => {
  let component: Demo13Component;
  let fixture: ComponentFixture<Demo13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
