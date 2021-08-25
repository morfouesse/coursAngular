import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  stringValue = 'Erwan';
  jsonValue = {
    id: 1,
    name: 2
  };
  dateValue = new Date();

  userList = [
    new User('Erwan', 'Baccon', 28),
    new User('Erwan2', 'Baccon2', 15),
    new User('Erwan3', 'Baccon3', 5)
  ];

  inputNumberValue: number;

  constructor() { }

  ngOnInit() {
  }

}
