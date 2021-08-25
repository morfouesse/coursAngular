import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectedUserComponent } from './display-selected-user.component';

describe('DisplaySelectedUserComponent', () => {
  let component: DisplaySelectedUserComponent;
  let fixture: ComponentFixture<DisplaySelectedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySelectedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySelectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
