import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestObservableService {

  messageSubject$ = new Subject<string>();

  getMessageSubject(): Observable<string> {
    return this.messageSubject$.asObservable();
  }

  setMessageSubject(newMessage: string) {
    this.messageSubject$.next(newMessage);
  }

  errorMessageSubject() {
    this.messageSubject$.error('Ceci est un message d\'erreur pour l\'observable');
  }

  clearMessageSubject() {
    this.messageSubject$.next('');
  }

  completeMessageSubject() {
    this.messageSubject$.complete();
  }

}



















// messageSubject$ = new Subject<string>();

//   constructor() { }

//   getMessageSubject(): Observable<string> {
//     return this.messageSubject$.asObservable();
//   }

//   setMessageSubject(value: string) {
//     this.messageSubject$.next(value);
//   }

//   clearMessageSubject() {
//     this.messageSubject$.next();
//   }

//   // Pour l'exemple
//   errorMessageSubject() {
//     this.messageSubject$.error('Ca sent pas bon tout ça, il y a une erreur !');
//   }

//   // Pour l'exemple
//   completeMessageSubject() {
//     this.messageSubject$.complete();
//   }
