import { Component, OnInit } from '@angular/core';
import { TestObservableService } from '../test-observable.service';

@Component({
  selector: 'app-set-observable',
  templateUrl: './set-observable.component.html',
  styleUrls: ['./set-observable.component.scss']
})
export class SetObservableComponent implements OnInit {

  constructor(private testObservableService: TestObservableService) { }

  ngOnInit() {
  }

  setObservable(message: string) {
    console.log('setObservable', message);
    this.testObservableService.setMessageSubject(message);
  }

  clearObservable() {
    this.testObservableService.clearMessageSubject();
  }

  setObservableError() {
    console.log('setObservableError');
    this.testObservableService.errorMessageSubject();
  }

  setObservableComplete() {
    console.log('setObservableComplete');
    this.testObservableService.completeMessageSubject();
  }

}







// setObservable(message: string) {
//   console.log('setObservable', message);
//   this.testObservableService.setMessageSubject(message);
// }

// clearObservable() {
//   this.testObservableService.clearMessageSubject();
// }

// setObservableError() {
//   console.log('setObservableError');
//   this.testObservableService.errorMessageSubject();
// }

// setObservableComplete() {
//   console.log('setObservableComplete');
//   this.testObservableService.completeMessageSubject();
// }
