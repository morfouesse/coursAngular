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
  private numberTest2 = 2;
  userJson = {
    name: 'Baccon',
    surname: 'Erwan',
    age: 30
  };

  listString: string[] = [];







  user: User;
  userWithValue = new User('Erwan', 'Baccon', 2);

  constructor() {
    this.numberTest = 102;
    // this.numberTest2 = 'Erwan'; // Pas possible car la variable d'origine est un number
    console.log(this.userWithValue);
    console.log(this.userWithValue.fullName());
    console.log({name: 'Erwan', surname: 'Baccon', age: 2});
    this.user = new User('', '', 0);
    this.user.name = 'Erwan';
    this.listString.push('Erwan');
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
