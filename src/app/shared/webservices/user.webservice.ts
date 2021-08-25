import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';

import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserWebService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.baseUrl + 'users');
  // }

  // addUser(userToAdd: User): Observable<any> {
  //   return this.http.post(this.baseUrl + 'users', userToAdd);
  // }

  // updateUser(userToUpdate: User, userId: number): Observable<any> {
  //   return this.http.put(this.baseUrl + 'users/' + userId, userToUpdate);
  // }

  // deleteUser(userId: number): Observable<any> {
  //   return this.http.delete(this.baseUrl + 'users/' + userId);
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users')
      .pipe(
        // Si on veut manipuler les données avant de les renvoyer
        map((res: User[]) => {
          console.log('UserWebService getUsers map res', res);
          return res;
        }),
        catchError((error) => this.handleError(error))
      );
  }

  addUser(userToAdd: User): Observable<any> {
    return this.http.post(this.baseUrl + 'users', userToAdd)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  updateUser(userToUpdate: User, userId: number): Observable<any> {
    return this.http.put(this.baseUrl + 'users/' + userId, userToUpdate)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'users/' + userId)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log('UserWebService error', error);

    return throwError('Something bad happened; please try again later.');
  }

}
