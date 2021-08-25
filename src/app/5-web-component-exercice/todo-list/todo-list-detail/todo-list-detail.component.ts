import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list-detail',
  templateUrl: './todo-list-detail.component.html',
  styleUrls: ['./todo-list-detail.component.scss']
})
export class TodoListDetailComponent implements OnInit {

  @Input() userSelectedInput;

  constructor() { }

  ngOnInit(): void {
  }


}
