import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-color',
  templateUrl: './text-color.component.html',
  styleUrls: ['./text-color.component.scss']
})
export class TextColorComponent implements OnInit {

  inputNumberValue: number;
  message = 'Non reconnu';
  cssClass: string;

  constructor() { }

  ngOnInit() {
  }

  handleChangeNumberValue() {
    // Verify if inputNumberValue is defined
    if (this.inputNumberValue === 0 || this.inputNumberValue) {
      if (this.inputNumberValue >= 1 && this.inputNumberValue <= 10) {
        this.message = 'Le nombre est petit';
        this.cssClass = 'app-color-green';
      } else if (this.inputNumberValue > 10) {
        this.message = 'Le nombre est grand';
        this.cssClass = 'app-color-red';
      } else {
        this.message = 'Le nombre est autre que les conditions définies';
        this.cssClass = '';
      }
    } else {
      this.message = 'Nombre non reconnu';
    }
  }

}
