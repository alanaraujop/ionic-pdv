import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(searchText);
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toString().toUpperCase();
    return items.filter( it => {
      let nome = it.nome.toString().toUpperCase();
      return nome.includes(searchText);
    });

   }
}
