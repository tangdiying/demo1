import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo12Component } from './demo12.component';

describe('Demo12Component', () => {
  let component: Demo12Component;
  let fixture: ComponentFixture<Demo12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
