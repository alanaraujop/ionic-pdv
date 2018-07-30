import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Orcamento, Cliente } from '../../model/orcamento';
import { Produto } from '../../model/produto';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  orcamento: Cliente;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }

}
