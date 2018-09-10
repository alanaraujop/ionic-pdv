import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../model/produto';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../assets/config';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider {

  private produtos: Array<any>;
  config = new Config;

  constructor(public http: HttpClient) {    
  }

  getAllProduto(){
    return this.produtos;
  }

  setAllProduto(_produtos){
    this.produtos = _produtos;
  }

  getHttpAllProduto():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.config.url + "Produto/");
  }

  getProduto(_id):Produto{
    this.produtos.forEach(element => {
      if(element.codProduto==_id)
        return element;
    });
    return new Produto();
  }

}
