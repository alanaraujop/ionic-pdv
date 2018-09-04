import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { Produto } from '../../model/produto';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  public produtos: Array<Produto>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutoProvider
  ) {
  }

  ionViewDidLoad(){
    this.produtoProvider.getHttpAllProduto()
                        .subscribe(res=>{
                          this.produtoProvider.setAllProduto(res);
                          this.produtos = this.produtoProvider.getAllProduto();
                        });
  }

}
