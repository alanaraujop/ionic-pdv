import { Component, OnInit, Inject, OnDestroy, NgModule, VERSION } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Orcamento, Cliente } from '../../model/orcamento';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { ClienteFormPage } from '../cliente-form/cliente-form';
import { OrderPipe } from 'ngx-order-pipe';
import { FilterPipe } from '../../pipes/filter/filter';

import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";

// Observable operators
import { debounceTime } from 'rxjs/Operators';

import { AlertController } from 'ionic-angular';

// @IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage implements OnInit, OnDestroy {

  private cliente = new Cliente();
  private clientes = new Array<Cliente>();
  private nomeFilter: string = "";
  private searchNome: string = "";

  private debounce = new Subject<string>();


  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private clienteProvider: ClienteProvider,
    public orderPipe: OrderPipe,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    

    let load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
    setTimeout(() => {
      load.dismiss();
    }, 8000);
    load.present();

    this.clienteProvider.getHttpAllCliente()
                        .subscribe(res => {
                          this.clienteProvider.setAllCliente(res);
                          this.clientes = this.orderPipe.transform(this.clienteProvider.getAllCliente(),'nome');
                        }, err => console.log(err), 
                          () => load.dismiss());

    this.debounce
        .pipe(debounceTime(500))
        .subscribe(filter => this.searchNome = filter);

  }

  EditarCliente(cliente) {
    this.navCtrl.push('ClienteFormPage', { clienteSelecionado: cliente });
  }

  CadastrarCliente() {
    let cliente = new Cliente();
    this.navCtrl.push('ClienteFormPage', { clienteSelecionado: cliente });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
