import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PagamentoProvider } from '../../providers/pagamento/pagamento';
import { FormaPagamento } from '../../model/orcamento';

// @IonicPage()
@Component({
  selector: 'page-pdv',
  templateUrl: 'pdv.html',
})
export class PdvPage {

  private formasPagamento: Array<FormaPagamento>;
 
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public navParams: NavParams, 
    public pagamentoProvider: PagamentoProvider) {
  }

  ionViewDidLoad() {
    let load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
    setTimeout(() => {
      load.dismiss();
    }, 20000);
    load.present();
    this.pagamentoProvider.getHttpPagamentos().subscribe(res=>{
      this.pagamentoProvider.setPagamentos(res.formaPagamento);
      this.formasPagamento = this.pagamentoProvider.getAllFormasPagamento();
      console.log(res.formaPagamento);
    }, err => console.log(err), 
    () => load.dismiss());  
  }

}
