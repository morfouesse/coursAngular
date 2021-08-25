import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() numberValueForChild: number;
  @Input() stringValueForChild: string;
  @Input() jsonValueForChild: any;

  @Output() eventEmitterForChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  callParent() {
    console.log('Depuis l enfant');
    this.eventEmitterForChild.emit('Erwan Baccon');
  }

}
