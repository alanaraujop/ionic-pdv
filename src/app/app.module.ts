import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PdvPage } from '../pages/pdv/pdv';
import { ClientePage } from '../pages/cliente/cliente';
import { LoginPage } from '../pages/login/login';
import { ProdutoPage } from '../pages/produto/produto';

import { DadosProvider } from '../providers/dados/dados';
import { ClienteProvider } from '../providers/cliente/cliente';
import { OrcamentoProvider } from '../providers/orcamento/orcamento';
import { LoadingProvider } from '../providers/loading/loading';
import { LoginProvider } from '../providers/login/login';
import { ProdutoProvider } from '../providers/produto/produto';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { PipesModule } from '../pipes/pipes.module';
import { OrderModule } from 'ngx-order-pipe';
import { LoginPageModule } from '../pages/login/login.module';
import { ClienteFormPageModule } from '../pages/cliente-form/cliente-form.module';
import { PagamentoProvider } from '../providers/pagamento/pagamento';
// import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PdvPage,
    ClientePage,
    ProdutoPage
 ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    OrderModule,
    PipesModule,
    LoginPageModule,
    ClienteFormPageModule
    // ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    PdvPage,
    LoginPage,
    ProdutoPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosProvider,
    ClienteProvider,
    OrcamentoProvider,
    LoginProvider,
    LoadingProvider,
    ProdutoProvider,
    PagamentoProvider
  ]
})
export class AppModule {}
