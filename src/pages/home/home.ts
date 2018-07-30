import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';
// import { DataTableComponent } from '../../components/data-table/data-table';
import { PdvPage } from '../pdv/pdv';
import { ClientePage } from '../cliente/cliente';
import { LoginProvider } from '../../providers/login/login';
import { PerfilComponent } from '../../components/perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public itens = [];
  lista: any;
  @Output () usuario = new EventEmitter<string>();

  constructor(public login: LoginProvider, public navCtrl: NavController, public dados: DadosProvider) {    
  }

  ionViewDidLoad(){
    // this.lista = this.login.usuario;
    this.login.emitirUsuario.subscribe(res=>console.log(res));
    // console.log("OO");
    this.usuario.emit("OKOKOKOK");
    // this.login.getUsuarioLogado().then((res)=>{
    //   console.log("Atualizado: " + );
    // })
  }

  
  openPdv(){
    this.navCtrl.setRoot(PdvPage);
  }  

  openCliente(){
    this.navCtrl.setRoot(ClientePage);
  }
}
