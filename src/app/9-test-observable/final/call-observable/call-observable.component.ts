import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestObservableService } from '../test-observable.service';

@Component({
  selector: 'app-call-observable',
  templateUrl: './call-observable.component.html',
  styleUrls: ['./call-observable.component.scss']
})
export class CallObservableComponent implements OnInit, OnDestroy {

  message: string;
  isComplete = false;
  subscription$: Subscription;

  constructor(private testObservableService: TestObservableService) { }

  ngOnInit() {
    this.subscription$ = this.testObservableService.getMessageSubject().subscribe(
      (value: string) => {
        // Next
        console.log('CallObservableComponent Next', value);
        this.message = value;
      }, (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }, () => {
        // Complete
        console.log('CallObservableComponent Complete');
        this.isComplete = true;
      }
    );

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    if (this.subscription$) {
      this.subscription$.unsubscribe();
      console.log('this.subscription$.unsubscribe');
    }
  }

}



// ngOnInit() {
//   this.subscriptionMessage$ = this.testObservableService.getMessageSubject().subscribe(
//     (value: string) => {
//       // Next
//       console.log('CallObservableComponent Next', value);
//       this.message = value;
//     }, (error) => {
//       // Error
//       console.error('CallObservableComponent error', error);
//     }, () => {
//       // Complete
//       console.log('CallObservableComponent Complete');
//       this.isComplete = true;
//     }
//   );
// }

// ngOnDestroy() {
//   if (this.subscriptionMessage$) {
//     this.subscriptionMessage$.unsubscribe();
//   }
// }
