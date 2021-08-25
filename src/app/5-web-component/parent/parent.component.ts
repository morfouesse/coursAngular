import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  stringValue = 'Erwan';
  ageValue = 2;

  jsonValue = {
    name: 'Erwan',
    ageValue: 2
  };

  userValue = new User('Erwan', 'Baccon', 2);

  constructor() { }

  ngOnInit() {
  }

  handleChildClickButton(message: string) {
    console.log('handleChildClickButton', message);
  }

}
