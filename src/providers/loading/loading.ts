import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';


@Injectable()
export class LoadingProvider {

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController
  ) {    
    var load = this.loadingCtrl.create({
      content: "Aguarde um momento..."
    });
    load.present();
  }

  showLoad(){
    
  }

  dismissLoad(){
    
  }

}
