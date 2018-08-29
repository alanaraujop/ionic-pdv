import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Cliente } from '../../model/orcamento';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { ClientePage } from '../cliente/cliente';
import { UpperPipe } from  '../../pipes/upper/upper';

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
    this.cliente = this.navParams.get('clienteSelecionado');
  }

  back(){
    this.navCtrl.setRoot(ClientePage);
  }

  upper(val: string){
      this.cliente.nome = val.toString().toUpperCase();
      console.log(this.cliente.nome);
  }

  saveCliente(){

    let load = this.loadingCtrl.create({content: "Aguarde um momento..."});
    load.present();   
   
    this.clienteProvider.saveCliente(this.cliente).map(res=>JSON.parse(res)).subscribe(
      res=>{console.log(res); if(res.Type == "Error"){alert("Ocorreu um erro ao salvar")}},
      err=>{alert("Ocorreu um erro ao salvar"); console.log(err)}, 
      () => {
      load.dismiss();        
      this.navCtrl.setRoot(ClientePage);
    });

  }
}
