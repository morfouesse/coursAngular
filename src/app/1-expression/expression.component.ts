import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit {

  nameValue = 'Erwan Baccon variable';
  public numberValue = 9;
  public colorValue = 'blue';

  public jsonValue = {
    name: 'Tata',
    age: 50
  };

  private privateValue = 'Erwan';

  readonly TEST_CONSTANT = 'test';

  constructor() { }

  ngOnInit() {

  }

  testValue(value) {
    return value ? 'Erwan' : 'Toto';
  }

}
