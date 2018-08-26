import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../model/orcamento';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from '../../assets/config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClienteProvider {
  config = new Config;
  public cliente: Cliente;
  
  constructor(
    public http: HttpClient
  ) {
  
  }


  getCliente(id:number):Observable<any>{
    return this.http.get(this.config.url + "Cliente/" + id);
  }

  getAllCliente():Observable<Array<Cliente>>{
    return this.http.get(this.config.url + "Cliente").map((res:Array<Cliente>)=>res);    
  }

  postCliente(_cliente: Cliente){
    return this.http.post(this.config.url+"Cliente?", _cliente, {responseType: 'text'});
  }

  updateCliente(_cliente: Cliente):Observable<string>{
    return this.http.put(this.config.url+"Cliente/" + _cliente.codCliente, _cliente, {responseType: 'text'});
  }

  deleteCliente(_cliente: Cliente){
    return this.http.delete(this.config.url+"Cliente/" + _cliente.codCliente);
  }
}
