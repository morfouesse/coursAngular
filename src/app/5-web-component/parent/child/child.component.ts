import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() stringValueInput: string;
  @Input() ageValueInput: number;
  @Input() userValueInput: User;

  @Output() eventChildButtonClickOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  handleClickEmitEvent() {
    this.eventChildButtonClickOutput.emit('Un emit a été fait !');
  }

}
