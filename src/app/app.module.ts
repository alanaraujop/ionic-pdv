import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PdvPage } from '../pages/pdv/pdv';
import { ClientePage } from '../pages/cliente/cliente';
import { LoginPage } from '../pages/login/login';
import { DadosProvider } from '../providers/dados/dados';
import { ClienteProvider } from '../providers/cliente/cliente';
import { OrcamentoProvider } from '../providers/orcamento/orcamento';
import { HttpClientModule } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { IonicStorageModule } from '@ionic/storage';
import { PerfilComponent } from '../components/perfil/perfil';
import { ClienteFormPage } from '../pages/cliente-form/cliente-form';
import { LoadingProvider } from '../providers/loading/loading';
import { PipesModule } from '../pipes/pipes.module';
import { OrderModule } from 'ngx-order-pipe';
// import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PdvPage,
    ClientePage,
    LoginPage,
    PerfilComponent,
    ClienteFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    OrderModule,
    PipesModule
    
    // ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ClientePage,
    PdvPage,
    LoginPage,
    ClienteFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosProvider,
    ClienteProvider,
    OrcamentoProvider,
    LoginProvider,
    LoadingProvider
  ]
})
export class AppModule {}
