import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list-detail',
  templateUrl: './todo-list-detail.component.html',
  styleUrls: ['./todo-list-detail.component.scss']
})
export class TodoListDetailComponent implements OnInit, OnDestroy {

  @Input() userSelectedInput;

  userSelectedFromObservable: string;

  subscription$: Subscription;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.subscription$ = this.userService.getUserSelected().subscribe(
      (newValue) => {
        // Next
        this.userSelectedFromObservable = newValue;
      },
      (error) => {
        // Error
        console.error('TodoListDetailComponent ngOnInit surbscrition this.userService.getUserSelected()', error);
      },
      () => {
        // Complete
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

}
