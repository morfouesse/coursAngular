import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  userList = ['Erwan', 'Toto', 'Alicia'];
  userSelected: string;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  handleAddValue(newValueFromChild: string): void {
    this.userList.push(newValueFromChild);
  }

  handleRemoveValue(indexValueToRemove: number): void {
    console.log(indexValueToRemove);
    this.userList.splice(indexValueToRemove, 1);
  }

  handleSelectUser(indexValueToSelect): void {
    this.userSelected = this.userList[indexValueToSelect];
    // this.userService.setUserSelected(this.userSelected);
  }

}
