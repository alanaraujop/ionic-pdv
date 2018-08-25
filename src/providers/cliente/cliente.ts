import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Funcionario, Cliente } from '../../model/orcamento';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from '../../assets/config';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

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

  getAllCliente():Observable<any>{
    return this.http.get(this.config.url + "Cliente");    
  }

  postCliente(_cliente: Cliente){
    return this.http.post(this.config.url+"Cliente?", _cliente);
  }

  updateCliente(_cliente: Cliente){
    return this.http.put(this.config.url+"Cliente/" + _cliente.codCliente, _cliente);
  }

  deleteCliente(_cliente: Cliente){
    return this.http.delete(this.config.url+"Cliente/" + _cliente.codCliente);
  }

}
