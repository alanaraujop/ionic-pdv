import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from '../../assets/config';

/*
  Generated class for the DadosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosProvider {

  private itens = ['primeiro', 'segundo', 'terceiro'];
  config = new Config;
  constructor( private http: HttpClient) {
  }

  getDados() : Observable<any>{
    // return this.itens;
    return this.http.get(this.config.url+"carros/marcas.json");
  }
}
