import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  userList: User[];

  userSelected: User;

  constructor() {
    this.userList = [
      new User('Erwan', 'Baccon', 29),
      new User('Alicia', 'Nope', 28),
      new User('Toto', 'NopeNope', 18)
    ];
  }

  ngOnInit() {

  }

  handleEventCallByChild(event: User) {
    if (event) {
      this.userSelected = event;
    }
  }

}
