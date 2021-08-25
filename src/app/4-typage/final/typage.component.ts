import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-typage',
  templateUrl: './typage.component.html',
  styleUrls: ['./typage.component.scss']
})
export class TypageComponent implements OnInit {

  // Variable public
  public numberTest: number;
  public numberTest2 = 2;
  userJson = {
    name: 'Baccon',
    surname: 'Erwan',
    age: 30
  };
  user: User;
  userWithValue = new User('Erwan', 'Baccon', 2);

  constructor() {
    this.numberTest = 102;
    // this.numberTest2 = 'Erwan'; // Pas possible car la variable d'origine est un number
    console.log(this.userWithValue);
    console.log(this.userWithValue.fullName());
  }

  ngOnInit() {
  }

  public getNumberUser(): number {
    return 2;
  }

  public displayText(text: string): string {
    return text;
  }

}
