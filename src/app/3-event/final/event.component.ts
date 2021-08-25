import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  texteValue = 'valeur initiale';

  handleTextValueClick(): void {
    this.texteValue = 'Click !';
  }

}
