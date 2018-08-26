import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Cliente } from '../../model/orcamento';
import { ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
  selector: 'page-cliente-form',
  templateUrl: 'cliente-form.html',
})
export class ClienteFormPage {

  public cliente = new Cliente();

  constructor(
    public clienteProvider: ClienteProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    this.cliente = JSON.parse(this.navParams.get('str'));
  }

  saveCliente(){

    let load = this.loadingCtrl.create({content: "Aguarde um momento..."});
    load.present();   
    if(this.cliente.codCliente == -1)
      this.clienteProvider.postCliente(this.cliente).subscribe(res=>this.navCtrl.pop(), err=>console.log(err), () => {
        this.navCtrl.pop();
        load.dismiss();
      });
    else
      this.clienteProvider.updateCliente(this.cliente).subscribe(res=>console.log(res), err=>console.log(err),  () => {
        this.navCtrl.pop();
        load.dismiss();
      });
  }
}
