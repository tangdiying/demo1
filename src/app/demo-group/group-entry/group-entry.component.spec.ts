import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEntryComponent } from './group-entry.component';

describe('GroupEntryComponent', () => {
  let component: GroupEntryComponent;
  let fixture: ComponentFixture<GroupEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
