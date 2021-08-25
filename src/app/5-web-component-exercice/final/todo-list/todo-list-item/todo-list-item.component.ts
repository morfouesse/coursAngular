import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/user-service.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  @Input() userForChildInput;
  @Input() indexUser;
  @Output() removeValueOutput = new EventEmitter();
  @Output() selectUserOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleRemoveValue(): void {
    this.removeValueOutput.emit(this.indexUser);
  }

  handleSelectUser(): void {
    this.selectUserOutput.emit(this.indexUser);
  }

}
