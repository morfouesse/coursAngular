import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservableExerciceComponent } from './test-observable-exercice.component';

describe('TestObservableExerciceComponent', () => {
  let component: TestObservableExerciceComponent;
  let fixture: ComponentFixture<TestObservableExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObservableExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObservableExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
