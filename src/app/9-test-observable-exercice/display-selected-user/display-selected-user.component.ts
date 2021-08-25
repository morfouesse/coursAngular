import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-display-selected-user',
  templateUrl: './display-selected-user.component.html',
  styleUrls: ['./display-selected-user.component.scss']
})
export class DisplaySelectedUserComponent implements OnInit, OnDestroy {

  userSelected: User;
  subscription$: Subscription;

  constructor(private userServiceService: UserServiceService) { }

  ngOnInit(): void {
    this.subscription$ = this.userServiceService.getUserSelected().subscribe(
      (userSelectedReturn) => {
        this.userSelected = userSelectedReturn;
      }, (error) => {
        console.error('DisplaySelectedUserComponent ngOnInit getUserSelected error', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

}
