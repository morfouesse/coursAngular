import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss']
})
export class ExpressionComponent implements OnInit {

  title = 'demo-cours'; // string
  intValue = 2; // number

  colorValue = 'green';


  constructor() { }

  ngOnInit() {
  }

}
