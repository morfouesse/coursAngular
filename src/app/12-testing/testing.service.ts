import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor() { }

  serviceTestFunction(value: number) {
    return value + 1;
  }


}
