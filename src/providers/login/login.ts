import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Funcionario } from '../../model/orcamento';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from '../../assets/config';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';


@Injectable()
export class LoginProvider {
  config = new Config;

  public usuario : string;
  public emitirUsuario = new EventEmitter<string>();

  constructor(public storage: Storage,public http: HttpClient) {    
  }


  logar(usuario: any):Observable<any>{
    return this.http.post(this.config.url+"login?", usuario);
  }

  getLogado(){
    return this.storage.get('funcionario');
  }

  setUsuario(_usuario: Funcionario){
    this.usuario = _usuario.nome;
    this.storage.set('funcionario', _usuario);
    this.emitirUsuario.emit(_usuario.nome);
  }

}
