import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-angular',
  templateUrl: './directive-angular.component.html',
  styleUrls: ['./directive-angular.component.scss']
})
export class DirectiveAngularComponent implements OnInit {

  conditionTrue = true;
  conditionFalse = false;

  modelText = 'Erwan';

  listString = ['Orange', 'Cerise', 'Kiwi', 'Banane'];
  classValue = 'app-bg-red';

  constructor() { }

  ngOnInit() {
  }

}
