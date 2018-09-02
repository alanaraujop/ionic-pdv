import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';
import { PdvPage } from '../pdv/pdv';
import { ClientePage } from '../cliente/cliente';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public itens = [];
  lista: any;
  private pdvPage = PdvPage;
  private clientePage = ClientePage;

  constructor(
    public login: LoginProvider, 
    public navCtrl: NavController, 
    public dados: DadosProvider
  ) {  
    
  }  
}
