import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent implements OnInit {

  userList = [
    new User('Erwan', 'Baccon', 30),
    new User('Toto', 'Tata', 5),
    new User('Titi', 'Tutu', 15)
  ];
  userSelected: User;

  constructor(private userServiceService: UserServiceService) { }

  ngOnInit(): void {
  }

  handleChangeUserSelected() {
    console.log('handleChangeUserSelected', this.userSelected);
    this.userServiceService.setUserSelected(this.userSelected);
  }

}
