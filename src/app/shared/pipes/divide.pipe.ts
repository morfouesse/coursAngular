import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(value: number, divideValue: number): any {
    return value / divideValue;
  }

}
