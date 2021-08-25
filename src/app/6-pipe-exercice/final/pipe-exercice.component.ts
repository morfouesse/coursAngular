import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-exercice',
  templateUrl: './pipe-exercice.component.html',
  styleUrls: ['./pipe-exercice.component.scss']
})
export class PipeExerciceComponent implements OnInit {

  numberValue = 0;
  divideValue = 0;

  constructor() { }

  ngOnInit() {
  }

}
