import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../model/orcamento';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from '../../assets/config';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class ClienteProvider {
  config = new Config;
  private cliente: Cliente;
  private clientes: Array<Cliente>;
  
  constructor(
    private http: HttpClient
  ) {  
  }

  getAllCliente(){
    return this.clientes;
  }

  setAllCliente(_clientes){
    this.clientes = _clientes;  
  }

  addCliente(_cliente){
    this.clientes.push(_cliente);
  }

  getEndereco(cep: string): Observable<any>{
    return this.http.get("http://viacep.com.br/ws/"+cep+"/json/ ");
  }

  getCliente(id:number):Observable<any>{
    return this.http.get(this.config.url + "Cliente/" + id);
  }

  getHttpAllCliente():Observable<Array<Cliente>>{
    return this.http.get(this.config.url + "Cliente").map((res:Array<Cliente>)=>res);    
  }

  // getAllCliente(){
  //   this.http.get<Cliente[]>(this.config.url + "Cliente").map((res:Array<Cliente>)=>{
  //     return res
  //   }
  //   );    
  // }

  saveCliente(_cliente: Cliente){
    return this.http.post(this.config.url+"Cliente?", _cliente, {responseType: 'text'});
  }

  // updateCliente(_cliente: Cliente):Observable<string>{
  //   return this.http.put(this.config.url+"Cliente/" + _cliente.codCliente, _cliente, {responseType: 'text'});
  // }

  deleteCliente(_cliente: Cliente){
    return this.http.delete(this.config.url+"Cliente/" + _cliente.codCliente);
  }


}
