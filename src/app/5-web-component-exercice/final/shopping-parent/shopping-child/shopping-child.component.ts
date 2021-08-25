import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingElement } from 'src/app/shared/models/shopping-element.model';

@Component({
  selector: 'app-shopping-child',
  templateUrl: './shopping-child.component.html',
  styleUrls: ['./shopping-child.component.scss']
})
export class ShoppingChildComponent implements OnInit {
  @Input() shoppingListForChild: ShoppingElement[];
  @Output() removeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeItem(index) {
    if (index === 0 || index) {
      this.removeEvent.emit(index);
    }

  }

}
