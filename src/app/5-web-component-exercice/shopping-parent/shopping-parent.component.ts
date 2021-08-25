import { Component, OnInit } from '@angular/core';
import { ShoppingElement } from 'src/app/shared/models/shopping-element.model';

@Component({
  selector: 'app-shopping-parent',
  templateUrl: './shopping-parent.component.html',
  styleUrls: ['./shopping-parent.component.scss']
})
export class ShoppingParentComponent implements OnInit {
  shoppingList: ShoppingElement[];

  addInputNameValue: string;
  addInputQuantityValue = 0;

  constructor() {
    this.shoppingList = [
      new ShoppingElement('Orange', 2),
      new ShoppingElement('Pasta', 4),
      new ShoppingElement('Steak de cheval', 5),
      new ShoppingElement('Vin rouge', 3)
    ];
  }

  ngOnInit() {

  }

  addValueInList(addInputNameValue, addInputQuantityValue) {
    if (addInputNameValue && addInputQuantityValue && this.shoppingList) {
      this.shoppingList.push(
        new ShoppingElement(addInputNameValue, addInputQuantityValue)
      );
    }
  }

  removeItemByChild(index) {
    if (index === 0 || index) {
      this.shoppingList.splice(index, 1);
    }

  }

}
