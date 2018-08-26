import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Orcamento, Cliente } from '../../model/orcamento';
import { Produto } from '../../model/produto';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { ClienteFormPage } from '../cliente-form/cliente-form'


@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

   public cliente = new Cliente(); 
   public clientes = new Array<Cliente>();
    
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private clienteProvider: ClienteProvider
  ) {
   
  }
    
  ionViewDidLoad() {
    let load = this.loadingCtrl.create({content:"Aguarde um momento..."});
    load.present();
    this.clienteProvider.getAllCliente().subscribe(res =>this.clientes = res, err => console.log(err), ()=>load.dismiss());
  }

  

  EditarCliente(cliente){      
    this.navCtrl.push(ClienteFormPage, {str : JSON.stringify(cliente)});
  }

  CadastrarCliente(){
    this.navCtrl.push(ClienteFormPage, {str : JSON.stringify(this.cliente)});
  }


  
}
