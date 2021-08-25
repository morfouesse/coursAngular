import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-angular-exercice',
  templateUrl: './directive-angular-exercice.component.html',
  styleUrls: ['./directive-angular-exercice.component.scss']
})
export class DirectiveAngularExerciceComponent implements OnInit {
  conditionTrue = true;
  conditionFalse = false;

  userList = ['Erwan', 'Salem', 'Alicia'];

  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

}
