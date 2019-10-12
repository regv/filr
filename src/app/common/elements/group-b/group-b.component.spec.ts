import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBComponent } from './group-b.component';

describe('GroupBComponent', () => {
  let component: GroupBComponent;
  let fixture: ComponentFixture<GroupBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
