import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextereabComponent } from './textereab.component';

describe('TextereabComponent', () => {
  let component: TextereabComponent;
  let fixture: ComponentFixture<TextereabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextereabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextereabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
