// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {

  constructor() {
    console.log('Hello ClienteProvider Provider');
  }

  getCliente(id:number){
    // this.http.get("http://fipeapi.appspot.com/api/1/carros/marcas.json")
  }
  getAllCliente(){

  }

}
