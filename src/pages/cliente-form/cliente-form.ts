import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../model/orcamento';
import { ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
  selector: 'page-cliente-form',
  templateUrl: 'cliente-form.html',
})
export class ClienteFormPage {

  public cliente = new Cliente();

  constructor(public clienteProvider: ClienteProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cliente = JSON.parse(this.navParams.get('str'));
  }

  saveCliente(){
    console.log(this.cliente);
    if(this.cliente.codCliente == -1)
    this.clienteProvider.postCliente(this.cliente).toPromise().then(res=>this.navCtrl.pop()).catch(res=>console.log(res));
    else
    this.clienteProvider.updateCliente(this.cliente).toPromise().then(res=>console.log(res)).catch(res=>console.log(res));
  }

}
