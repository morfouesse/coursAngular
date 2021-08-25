import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class TestSharedService {
  userSelected: User;

  constructor() { }

  setUser(userSelectedFromComponent) {
    this.userSelected = userSelectedFromComponent;
  }

  testService(): string {
    console.log('testService');
    return 'Ceci est un string créé dans un service';
  }
}
