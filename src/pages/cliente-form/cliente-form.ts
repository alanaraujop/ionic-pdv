import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Toast, ToastController } from 'ionic-angular';
import { Cliente } from '../../model/orcamento';
import { ClienteProvider } from '../../providers/cliente/cliente';
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
    public loadingCtrl: LoadingController,
    public toast: ToastController
  ) {
  }

  ionViewDidLoad() {
    this.cliente = this.navParams.get('clienteSelecionado');
    
  }

  upper(val: string) {
    this.cliente.nome = val.toUpperCase();
  }

  buscarCep(cep){
    if(cep.length==8){
      console.log(cep);
      this.clienteProvider.getEndereco(cep).
      subscribe(
        res=>{
          this.cliente.bairro = res.bairro;
          this.cliente.endereco = res.logradouro;
          this.cliente.uf = res.uf;
          this.cliente.municipio = res.localidade;
        }
      );
    }
    
  }

  saveCliente(_cliente){
    let load = this.loadingCtrl.create({content: "Aguarde um momento..."});
    load.present();   
   
    this.clienteProvider.saveCliente(_cliente).map(res=>JSON.parse(res)).subscribe(
      res=>{
        console.log(res); 
        if(res.Type == "Error"){
          this.toast.create({message:"Ocorreu um erro ao salvar", duration:3000, position:"botton"}).present();
        }
        else{
          if(res.nome){
            this.clienteProvider.addCliente(res);
            this.toast.create({message:"Cliente salvo com sucesso!", duration:3000, position:"botton"}).present();
          } else
            this.toast.create({message:"Cliente atualizado com sucesso!", duration:3000, position:"botton"}).present();
        }
      },
      err=>{
        alert("Ocorreu um erro ao salvar"); 
        this.toast.create({message:"Ocorreu um erro ao salvar", duration:3000, position:"botton"}).present();
        console.log(err)
      }, 
      () => {
      load.dismiss();  
      this.navCtrl.pop();
    });

  }
}
