import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';
import { PdvPage } from '../pdv/pdv';
import { ClientePage } from '../cliente/cliente';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public itens = [];
  lista: any;

  constructor(public login: LoginProvider, public navCtrl: NavController, public dados: DadosProvider) {    
  }

  ionViewDidLoad(){
  
  }

  
  openPdv(){
    this.navCtrl.setRoot(PdvPage);
  }  

  openCliente(){
    this.navCtrl.setRoot(ClientePage);
  }
}
