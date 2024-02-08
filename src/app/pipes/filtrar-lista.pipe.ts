import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarLista',
})
export class FiltrarListaPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    const finded: any[] = [];
    if (typeof items === 'object') {
      for (const item of items) {
        for (const field of Object.getOwnPropertyNames(item)) {
          if (item[field]) {
            if (String(item[field]).includes(searchText.toLocaleLowerCase())) {
              finded.push(item);
              break;
            }
          }
        }
      }
    }
    return searchText ? finded : items;
  }
}
