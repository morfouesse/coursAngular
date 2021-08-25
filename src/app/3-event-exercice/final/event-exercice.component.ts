import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-exercice',
  templateUrl: './event-exercice.component.html',
  styleUrls: ['./event-exercice.component.scss']
})
export class EventExerciceComponent {

  // Exercice 1
  count = 0;

  // Exercice 2
  isSpoil = false;

  // Exercice 3
  cssClassValue = 'app-bg-blue';

  // Exercice 4
  userList = ['Erwan', 'Salem', 'Alicia'];
  userValue: string;

  constructor() { }

  handleAddCount() {
    this.count++;
  }

  handleChangeSpoilerBoolean() {
    this.isSpoil = !this.isSpoil;
  }

  handleChangeCssClass(classValue) {
    this.cssClassValue = classValue;
  }

  handleCallConsoleWithUserValue() {
    console.log(this.userValue);
  }

}
