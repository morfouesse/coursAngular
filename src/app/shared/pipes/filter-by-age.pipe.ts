import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'filterByAge'
})
export class FilterByAgePipe implements PipeTransform {

  transform(valueList: User[], ageValue: number): User[] {
    return valueList.filter((valueItem) => {
      return valueItem.age > ageValue;
    });
  }

}
