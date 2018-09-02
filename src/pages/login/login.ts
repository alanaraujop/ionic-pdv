import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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

 public login = new Funcionario();

  constructor(
    public storage: Storage, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private loginProvider: LoginProvider,
    public loadingCtrl: LoadingController,
    public toast: ToastController
  ) {
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

  logar(_login) { 
    let load = this.loadingCtrl.create({content:"Aguarde um momento..."});
    load.present();  
    this.loginProvider.logar(_login).toPromise().then(res=>{
      load.dismiss();
      console.log(res);
      if(res.nome==null) {
        this.toast.create({message:"Usuário ou senha incorretos.", duration:3000, position:"botton"}).present();
      }
      else{
        this.login = res.Funcionario; 
        this.loginProvider.setUsuario(res.Funcionario);
        this.navCtrl.setRoot(HomePage);
      }
      }
    ).catch(
      ()=>{
        load.dismiss();
        this.toast.create({message:"Usuário ou senha incorretos.", duration:3000, position:"botton"}).present();
      }
  );
  }
}
