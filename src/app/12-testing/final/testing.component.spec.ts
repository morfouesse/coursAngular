import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { TestingService } from './testing.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;
  let debugElement: DebugElement;

  let testingService: TestingService;
  let spyOnServiceTestFunction: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComponent ],
      providers: [
        TestingService,
        // { provide: TestingService, useClass: MockTestingService}
        // { provide: TestingService, useClass: {serviceTestFunction: null}}
      ]
    })
    // .overrideTemplate(TestingComponent, '')
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    testingService = debugElement.injector.get(TestingService);

    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // describe('countIncrement', () => {
  //   it('should increment count after init component then count is increment', () => {
  //     // GIVEN
  //     // Noting to give for the moment

  //     // WHEN
  //     component.countIncrement();

  //     // THEN
  //     expect(component.count).toBe(1);
  //   });

  //   it('should increment count after count don\'t have default value', () => {
  //     // GIVEN
  //     component.count = 2;

  //     // WHEN
  //     component.countIncrement();

  //     // THEN
  //     expect(component.count).toBe(3);
  //   });

  //   it('should increment count in template', () => {
  //     // GIVEN

  //     // WHEN
  //     component.countIncrement();
  //     fixture.detectChanges();

  //     // THEN
  //     expect(component.count).toBe(1);
  //     const value = debugElement.query(By.css('#count-element')).nativeElement.innerText;
  //     expect(value).toEqual('1');
  //   });
  // });

  // describe('incrementValueByService', () => {
  //   it('should increment value after init component with spy and real function', () => {
  //     // GIVEN
  //     spyOnServiceTestFunction = spyOn(testingService, 'serviceTestFunction').and.callThrough();

  //     // WHEN
  //     component.incrementValueByService();

  //     // THEN
  //     expect(component.incrementValue).toBe(1);
  //     expect(spyOnServiceTestFunction).toHaveBeenCalled();
  //     expect(spyOnServiceTestFunction).toHaveBeenCalledTimes(1);
  //     expect(spyOnServiceTestFunction).toHaveBeenCalledWith(0);
  //   });
  //   it('should increment value after init component with spy and return value', () => {
  //     // GIVEN
  //     spyOnServiceTestFunction = spyOn(testingService, 'serviceTestFunction').and.returnValue(4);

  //     // WHEN
  //     component.incrementValueByService();

  //     // THEN
  //     expect(component.incrementValue).toBe(4);
  //     expect(spyOnServiceTestFunction).toHaveBeenCalled();
  //     expect(spyOnServiceTestFunction).toHaveBeenCalledTimes(1);
  //     expect(spyOnServiceTestFunction).toHaveBeenCalledWith(0);
  //   });
  // });

  // describe('conditionFunction', () => {
  //   it('should pass boolean value to isOk property to true', () => {
  //     // GIVEN
  //     // Noting to give for the moment
  //     const condition = true;

  //     // WHEN
  //     component.conditionFunction(condition);

  //     // THEN
  //     expect(component.isOk).toBeTruthy();
  //   });

  //   it('should pass boolean value to isOk property to false', () => {
  //     // GIVEN
  //     // Noting to give for the moment
  //     const condition = false;

  //     // WHEN
  //     component.conditionFunction(condition);

  //     // THEN
  //     expect(component.isOk).toBeTruthy();
  //   });
  // });


});
