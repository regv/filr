import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbComponent } from './inputb.component';

describe('InputbComponent', () => {
  let component: InputbComponent;
  let fixture: ComponentFixture<InputbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
