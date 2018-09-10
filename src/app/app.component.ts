import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PdvPage } from '../pages/pdv/pdv';
import { ClientePage } from '../pages/cliente/cliente';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';

import { LoginProvider } from '../providers/login/login';
import { ProdutoPage } from '../pages/produto/produto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
 // rootPage: any = ProdutoPage;

  usuario: string;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public storage: Storage,
    public login: LoginProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, icon: "home" },
      { title: 'PDV', component: PdvPage, icon: "cart" },
      { title: 'CLIENTE', component: ClientePage, icon: "person" },
      { title: 'PRODUTO', component: ProdutoPage, icon: "cube" },
    ];

    platform.registerBackButtonAction(()=>{
      if(this.nav.getActive().component==HomePage || this.nav.getActive().component==LoginPage){
         if(confirm("Deseja Encerrar?"))
         platform.exitApp();
      } else
          this.nav.pop();
    }, 1);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login.emitirUsuario.subscribe(res=>this.usuario=res);
      this.nav.setPages(this.nav.getViews(), {animate: true, animation: "slide"})
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component==HomePage)
      this.nav.setRoot(page.component);
    else  
      this.nav.push(page.component);
  }
  logout(){
    this.nav.setRoot(LoginPage);
    this.storage.clear();
  }

  
}
