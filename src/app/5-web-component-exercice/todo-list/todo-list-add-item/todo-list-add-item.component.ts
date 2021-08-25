import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-add-item',
  templateUrl: './todo-list-add-item.component.html',
  styleUrls: ['./todo-list-add-item.component.scss']
})
export class TodoListAddItemComponent implements OnInit {
  @Output() addValueOutputForChild = new EventEmitter();

  newTextValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  handleAddValue(): void {
    this.addValueOutputForChild.emit(this.newTextValue);
  }

}
