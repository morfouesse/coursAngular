import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.scss']
})
export class Es6Component implements OnInit {


  // let toto; // Pas de let en déclaration de propriétés de class
  // const toto; // Pas de const en déclaration de propriétés de class

  tableNumber1 = [
    0, 1, 1, 2, 3, 5, 8
  ];

  tableNumber2 = [
    13, 21, 34, 55, 89, 144
  ];

  constructor() { }

  ngOnInit() {

    this.findExemple(2);
  }

  variableFunction() {
    // let : variable avec une portée de bloc / modification de la variable plus tard
    let userId = 0;
    userId = 1;

    // const : variable avec une portée de bloc / pas de modification de variable
    const user = {};
    // user = {}; // Pas possible
  }

  findExemple(numberValueSearch: number) {
    const result = this.tableNumber1.find((numberItem) => numberItem === numberValueSearch);
    console.log(result);
  }

  spreadOperator() {
    const fusionTable = [...this.tableNumber1, ...this.tableNumber2];
    const test = [...this.tableNumber1];
  }

  duplicateObjectWithOtherRef() {
    const testAssign = Object.assign({}, {name: 'Erwan', surname: 'Baccon', age: 30});
  }

}
