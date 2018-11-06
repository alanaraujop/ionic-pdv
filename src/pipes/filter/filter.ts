import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toString().toUpperCase();
    return items.filter( it => {
      let nome = it.descricaoCompleta.toString().toUpperCase();
      let codProduto = it.codProduto.toString();
      return nome.includes(searchText) || codProduto.includes(searchText);
    });

   }
}
