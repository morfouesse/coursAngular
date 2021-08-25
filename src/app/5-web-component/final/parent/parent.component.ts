import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  numberValue = 2;
  stringValue = 'Erwan';

  jsonValue = {
    number: 99,
    string: 'toto'
  };

  isChildCallParent = false;

  constructor() { }

  ngOnInit() {
  }

  callByChild(event) {
    this.isChildCallParent = true;
    console.log('Dans le parent', event);
  }

}
