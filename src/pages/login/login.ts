import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';
import { Funcionario } from '../../model/orcamento';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 login = new Funcionario;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams, private loginProvider: LoginProvider) {
  }

  ionViewDidLoad(){
      this.loginProvider.getLogado().then(res=>{
        if(res){
          console.log(res);
          this.loginProvider.setUsuario(res);
          this.navCtrl.setRoot(HomePage);       
        }
      });
  
  }

  logar() {      
    this.loginProvider.logar(this.login).toPromise().then(res=>{
      if(res.Error) alert(res.Error);
      else{
        this.login = res.Funcionario; 
        this.loginProvider.setUsuario(res.Funcionario);
        this.navCtrl.setRoot(HomePage);
        // window.location.reload();
      }
      }
    );
  }
}
