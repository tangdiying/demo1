import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquireSecletComponent } from './squire-seclet.component';

describe('SquireSecletComponent', () => {
  let component: SquireSecletComponent;
  let fixture: ComponentFixture<SquireSecletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquireSecletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquireSecletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
