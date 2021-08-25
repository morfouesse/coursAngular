import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-typage-exercice',
  templateUrl: './typage-exercice.component.html',
  styleUrls: ['./typage-exercice.component.scss']
})
export class TypageExerciceComponent implements OnInit {

  user: User;
  constructor() {
    this.user = new User('Erwan', 'Baccon', 30);
  }

  ngOnInit() {
  }

}
