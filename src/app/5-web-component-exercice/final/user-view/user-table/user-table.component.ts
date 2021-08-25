import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  @Input() userListForTable: User[];
  @Output() userEventForView = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  handleClickRow(user: User) {
    if (user) {
      this.userEventForView.emit(user);
    }
  }
}
