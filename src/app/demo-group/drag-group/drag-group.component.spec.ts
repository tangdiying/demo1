import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragGroupComponent } from './drag-group.component';

describe('DragGroupComponent', () => {
  let component: DragGroupComponent;
  let fixture: ComponentFixture<DragGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
