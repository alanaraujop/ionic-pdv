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

  private produtos: Array<Produto> = [];
  private produtosFull: Array<Produto> = [];
  private produtoFilter: string = "";
  private searchProduto: string = "";

  private debounce = new Subject<string>();

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
                          this.produtosFull = this.orderPipe.transform(this.produtoProvider.getAllProduto(), 'nome');
                          for (let i = 0; i < 30; i++) {
                            this.produtos.push( this.produtosFull[this.produtos.length + i]);
                          }
                        });

    // this.produtos = this.produtoProvider.getAllProduto();

    this.debounce
    .pipe(debounceTime(600))
    .subscribe(filter => this.searchProduto = filter);
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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.produtos.push( this.produtosFull[this.produtos.length - 1 + i]);
      }

      console.log(this.produtos);
      infiniteScroll.complete();
    }, 100);
  }


}
