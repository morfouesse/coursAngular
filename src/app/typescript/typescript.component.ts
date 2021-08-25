import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {

  // Variable
  public count: number;
  private text: string;
  protected isOk: boolean;
  userList: Array<string>;
  fruitList: string[];
  anyValue: any;
  userAdmin: UserAdmin;

  // Enum
  enumValue: Direction;

  constructor() {
    // number
    this.count = 2; // Integer
    this.count = 2.5; // Decimal

    // string
    this.text = 'Toto';

    // boolean
    this.isOk = true;
    this.isOk = !!this.text;

    // Array
    this.userList = ['toto'];
    this.fruitList = ['banana'];

    // any
    this.anyValue = 2;
    this.anyValue = 'toto';

    // Enum
    this.enumValue = Direction.down;

  }

  ngOnInit() {
    // Casting
    const userWithoutCast = {name: 'Erwan', surname: 'Baccon', age: 29};
    const userCastWay1 = <User>{name: 'Erwan', surname: 'Baccon', age: 29};
    const userCastWay2 = {name: 'Erwan', surname: 'Baccon', age: 29} as User;
    // this.testTypeParam(userWithoutCast); // Error
    this.testTypeParam(userCastWay1);
    this.testTypeParam(userCastWay2);

    // Class Extends Class (ES6 et non TypeScript)
    const parent = new Parent('Erwan', 'Baccon', 29);
    parent.cry();


    // Interface
    // const fruit = new Fruit(); // Nope
    const fruit = {name: 'Banana'} as Fruit;

    // Class Implements Interface
    const userAdminWithInterface = new UserAdmin();
    userAdminWithInterface.access = [];

    // Module
    const userAdmin = new ModuleAdmin.UserAdmin();
    const userAdminInterface = {name: 'test'} as ModuleAdmin.Profile;

    console.log(userAdmin);
    console.log(userAdminInterface);
  }

  // Type on return
  handleReturnString(): string {
    return 'texte return';
  }

  // Return nothing
  handleReturnNothing(): void {
    // Do something but not return value
  }

  testTypeParam(user: User, isOptional?: boolean, isOptionalWithDefaultValue: boolean = false) {
    if (isOptional) {

    }
  }

}

/**
 * A DECLARER DANS SON PROPRE FICHIER
 */
export enum Direction {
  up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT'
}

/**
 * A DECLARER DANS SON PROPRE FICHIER
 */
export interface Fruit {
  name: string;
  family?: string;
}

/**
 * A DECLARER DANS SON PROPRE FICHIER
 */
export class Child {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  cry() {
    console.log('TOTO');
  }
}
export class Parent extends Child {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string, age: number) {
    super(age);
  }
}


/**
 * A DECLARER DANS SON PROPRE FICHIER
 */
export class UserAdmin implements Profile {
  firstName: string;
  lastName: string;
  age: number;
  profile: string;
  access: string[];

  test() {
    return '';
  }
}

/**
 * A DECLARER DANS SON PROPRE FICHIER
 */
export interface Profile {
  profile: string,
  access?: string[]

  test(): string;
}

/**
 * A DECLARER DANS SON PROPRE FICHIER
 */
export module ModuleAdmin {
  export class UserAdmin {
    firstNameM: string;
    lastNameM: string;
    ageM: number;
  }

  export interface Profile {
    profile?: string,
    access?: string[]
  }
}
