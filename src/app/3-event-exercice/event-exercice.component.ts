import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-exercice',
  templateUrl: './event-exercice.component.html',
  styleUrls: ['./event-exercice.component.scss']
})
export class EventExerciceComponent {

  // Exercice 1
  countValue = 0;

  // Exercice 2
  isDisplay = true;

  // Exercice 3
  cssClassValue = 'app-bg-blue';

  // Exercice 4
  userList = ['Erwan', 'Salem', 'Alicia'];
  userValue = '';

  constructor() {}

  handleAddCount() {
    this.countValue++;
    console.log('handleAddCount', this.countValue);
  }

  handleChangeSpoilerBoolean() {
    console.log('handleChangeSpoilerBoolean', this.isDisplay);
    this.isDisplay = !this.isDisplay;
  }

  handleChangeCssClass(classValue) {
    console.log('handleChangeCssClass', classValue);
    this.cssClassValue = classValue;
  }

  handleCallConsoleWithUserValue() {
    console.log('handleCallConsoleWithUserValue', this.userValue);
  }

}
