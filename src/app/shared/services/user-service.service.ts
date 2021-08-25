import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userSelected$ = new Subject<User>();

  constructor() { }

  getUserSelected(): Observable<User> {
    return this.userSelected$.asObservable();
  }

  setUserSelected(newUserSelected: User): void {
    this.userSelected$.next(newUserSelected);
  }
}
