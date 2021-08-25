import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  texteValue = 'valeur initiale';

  handleClickTextValue() {
    this.texteValue = 'Click !';
  }

  handleMouseEvent(message) {
    this.texteValue = message;
    const result = this.test();
  }

  test() {
    return 'Erwan';
  }

}
