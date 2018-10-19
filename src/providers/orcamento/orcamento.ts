import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item, Orcamento } from '../../model/orcamento';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../assets/config';

@Injectable()
export class OrcamentoProvider {
  config = new Config;

  constructor(public http: HttpClient) {
    console.log('Hello OrcamentoProvider Provider');
  }

  
  salvarItem(item: Item):Observable<any>{    
    return this.http.post(this.config.url+"orcamento?", item);
  }

  cancelarItem(item: Item):Observable<any>{  
    item.ativo = false;
    return this.http.post(this.config.url+"orcamento?", item);
  }

  listarItens(numOrcamento: number):Observable<any>{
    return this.http.get(this.config.url + "orcamento/" + numOrcamento);
  }

}
