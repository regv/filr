import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputuComponent } from './inputu.component';

describe('InputuComponent', () => {
  let component: InputuComponent;
  let fixture: ComponentFixture<InputuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
