import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from '../interfaces/IUser';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any [], query: string): any [] {
    if (!items) {
      return [];
    }
    if (!query) {
      return items;
    }
    query = query.toLowerCase();
    return items.filter(
      o => Object.keys(o).some(k => {
        if (typeof o[k] === 'string') {
          return o[k].toLowerCase().includes(query.toLowerCase());
        }
      }));
  }

}
