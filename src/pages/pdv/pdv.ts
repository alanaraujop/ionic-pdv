import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PagamentoProvider } from '../../providers/pagamento/pagamento';
import { FormaPagamento, Orcamento } from '../../model/orcamento';

// @IonicPage()
@Component({
  selector: 'page-pdv',
  templateUrl: 'pdv.html',
})
export class PdvPage {

  private formasPagamento: Array<FormaPagamento>;
  private orcamento = new Orcamento();
 
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    public navParams: NavParams, 
    public pagamentoProvider: PagamentoProvider) {
  }

  ionViewDidLoad() {
    console.log(this.orcamento);
    let load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
    setTimeout(() => {
      load.dismiss();
    }, 20000);
    load.present();
    this.pagamentoProvider.getHttpPagamentos().subscribe(res=>{
      this.pagamentoProvider.setPagamentos(res.formaPagamento);
      this.formasPagamento = this.pagamentoProvider.getAllFormasPagamento();
    }, err => console.log(err), 
    () => load.dismiss());  
  }

}
