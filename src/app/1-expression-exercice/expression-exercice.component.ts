import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-exercice',
  templateUrl: './expression-exercice.component.html',
  styleUrls: ['./expression-exercice.component.scss']
})
export class ExpressionExerciceComponent implements OnInit {

  tableValue = ['Erwan', 'Toto', 'Tata'];

  titleValue = 'Ceci est un title avec une variable venant du composant';

  jsonValue = {
    valueNumber: 1,
    valueString: 'Erwan'
  };

  constructor() { }

  ngOnInit() {

  }

}
