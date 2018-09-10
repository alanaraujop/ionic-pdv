import { Component, OnInit, Inject, OnDestroy, NgModule, VERSION } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FilterPipe } from '../../pipes/filter/filter';
import { ProdutoProvider } from '../../providers/produto/produto';
import { Produto } from '../../model/produto';

import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";

// Observable operators
import { debounceTime } from 'rxjs/Operators';
// Pipes
import { OrderPipe } from 'ngx-order-pipe';

//@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  public produtos: Array<Produto>;
  public produtoFilter: string = "";

  public debounce = new Subject<string>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoProvider: ProdutoProvider,
    public orderPipe: OrderPipe
  ) {
  }

  ionViewDidLoad(){
    this.produtoProvider.getHttpAllProduto()
                        .subscribe(res=>{
                          this.produtoProvider.setAllProduto(res);
                          this.produtos = this.produtoProvider.getAllProduto();
                        });

    // this.produtos = this.produtoProvider.getAllProduto();

    this.debounce
    .pipe(debounceTime(500))
    .subscribe(filter => this.produtoFilter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  exibirDetalhes(_produto: Produto){
    this.produtos.forEach(produto=>{
      if(_produto.codProduto == produto.codProduto){
        produto.open = !produto.open;
      } else 
      produto.open = false;
    })
  }

}
