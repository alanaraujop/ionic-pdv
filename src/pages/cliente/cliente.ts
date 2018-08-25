import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
   public clientes: Array<Cliente>;

  // public clienteProvider = new ClienteProvider();
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clienteProvider: ClienteProvider
  ) {
      
  }
    
  ionViewDidLoad() {
    this.clienteProvider.getAllCliente().toPromise().then(res => this.clientes = res);
//    this.clienteProvider.getAllCliente().map((res:Array<Cliente>)=>res).subscribe(res => this.clientes = res);
  }

  EditarCliente(cliente){  
    this.navCtrl.push(ClienteFormPage, {str : JSON.stringify(cliente)});
  }

  CadastrarCliente(){
    this.navCtrl.push(ClienteFormPage, {str : JSON.stringify(this.cliente)});
  }

}
