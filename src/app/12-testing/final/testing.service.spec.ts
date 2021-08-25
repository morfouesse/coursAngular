import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service: TestingService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // describe('serviceTestFunction', () => {
  //   it('should be increment value', () => {
  //     // GIVEN
  //     const value = 2;

  //     // WHEN
  //     const result = service.serviceTestFunction(value);

  //     // THEN
  //     expect(result).toBe(3);
  //   });
  // });
});
