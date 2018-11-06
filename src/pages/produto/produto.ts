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
    public orderPipe: OrderPipe,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad(){
    let load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
    setTimeout(() => {
      load.dismiss();
    }, 20000);
    load.present();

    this.produtoProvider.getHttpAllProduto()
                        .subscribe(res=>{
                          this.produtoProvider.setAllProduto(res);
                          this.produtosFull = this.orderPipe.transform(this.produtoProvider.getAllProduto(), 'descricaoCompleta');
                          for (let i = 0; i < 30 ; i++) {
                            this.produtos.push( this.produtosFull[this.produtos.length + i]);
                          }
                          load.dismiss();
                        }, ()=> load.dismiss());

    // this.produtos = this.produtoProvider.getAllProduto();

    this.debounce
    .pipe(debounceTime(600))
    .subscribe(filter => {
     this.produtos = [];
    
     let aux = this.filtrar(this.produtosFull, filter);
      for (let i = 0; i < 30 && aux[i]!==undefined ; i++) {
        
        this.produtos.push(aux[i]);
      }
    console.log(this.produtos);

    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  exibirDetalhes(_produto: Produto){
    if(this.produtos){
    this.produtos.forEach(item=>{
      if(_produto.codProduto == item.codProduto){
        item.open = !item.open;
      } else 
      item.open = false;
    })
  }
  }

  doInfinite(infiniteScroll) {
   
      let aux = this.filtrar(this.produtosFull, this.produtoFilter);
      
      for (let i = 0; i < 30 && aux[this.produtos.length + i]!==undefined ; i++) {        
        this.produtos.push(aux[this.produtos.length + i]);
      }

      // for (let i = 0; i < 30; i++) {
      //   this.produtos.push( this.produtosFull[this.produtos.length + i]);
      // }

      console.log(this.produtos);
      infiniteScroll.complete();
    
  }

  filtrar(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText){
      // let aux = [];
      // for (let i = 0; i < 30 ; i++) {
      //   aux.push( this.produtosFull[i]);
      // }
      // return aux;
      return items;
    } 

    searchText = searchText.toString().toUpperCase();
    return items.filter( it => {
      let nome = it.descricaoCompleta.toString().toUpperCase();
      let codProduto = it.codProduto.toString().toUpperCase();
      return nome.includes(searchText) || codProduto.includes(searchText);
    });

   }

}
