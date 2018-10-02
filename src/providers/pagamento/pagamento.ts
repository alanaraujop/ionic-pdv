import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../assets/config';
import { FormaPagamento } from '../../model/orcamento';

/*
  Generated class for the PagamentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PagamentoProvider {
  config = new Config;
  public formasPagamento : Array<FormaPagamento>;

  constructor(public http: HttpClient) {
    console.log('Hello PagamentoProvider Provider');
  }

  getHttpPagamentos(){
    return this.http.get(this.config.url+"TabelasBasicas").map((res:any)=>res);
  }

  setPagamentos(_pagamentos){
    this.formasPagamento = _pagamentos;
  }

  getAllFormasPagamento(){
    return this.formasPagamento;
  }
}
