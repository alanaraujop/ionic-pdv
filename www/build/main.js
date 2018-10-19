webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_orcamento__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(storage, navCtrl, navParams, loginProvider, loadingCtrl, toast) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginProvider = loginProvider;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.login = new __WEBPACK_IMPORTED_MODULE_4__model_orcamento__["b" /* Funcionario */]();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loginProvider.getLogado().then(function (res) {
            if (res) {
                console.log(res);
                _this.loginProvider.setUsuario(res);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        });
    };
    LoginPage.prototype.logar = function (_login) {
        var _this = this;
        var load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
        load.present();
        this.loginProvider.logar(_login).toPromise().then(function (res) {
            load.dismiss();
            console.log(res);
            if (res.nome == null) {
                _this.toast.create({ message: "Usuário ou senha incorretos.", duration: 3000, position: "botton" }).present();
            }
            else {
                _this.login = res.Funcionario;
                _this.loginProvider.setUsuario(res.Funcionario);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
        }).catch(function () {
            load.dismiss();
            _this.toast.create({ message: "Usuário ou senha incorretos.", duration: 3000, position: "botton" }).present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\git\ionic-pdv\src\pages\login\login.html"*/'<ion-content padding>\n    <div class="overlay">\n        <img src="assets/icon/point-of-sale.png" alt="logo">\n        <div class="form" padding>\n            <ion-item class="transparent">\n                <ion-input [(ngModel)]="login.nome" name="nome" type="text" placeholder="Nome">\n                </ion-input>\n            </ion-item>\n            <!-- <h6 *ngIf="errorEmail" class="error"> {{messageEmail}}</h6> -->\n            <ion-item class="transparent">\n                <ion-input [(ngModel)]="login.senha" type="password" placeholder="Senha">\n                </ion-input>\n            </ion-item>\n            <!-- <h6 *ngIf="errorPassword" class="error"> {{messagePassword}}</h6> -->\n            <button ion-button block outline color="secondary" class="login-button" (click)="logar(login)">Login</button>\n        </div>\n\n    </div>\n</ion-content>'/*ion-inline-end:"C:\git\ionic-pdv\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_dados__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dados_dados___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__providers_dados_dados__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdv_pdv__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cliente_cliente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__produto_produto__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(login, navCtrl, dados) {
        this.login = login;
        this.navCtrl = navCtrl;
        this.dados = dados;
        this.itens = [];
        this.pdvPage = __WEBPACK_IMPORTED_MODULE_3__pdv_pdv__["a" /* PdvPage */];
        this.clientePage = __WEBPACK_IMPORTED_MODULE_4__cliente_cliente__["a" /* ClientePage */];
        this.produtoPage = __WEBPACK_IMPORTED_MODULE_6__produto_produto__["a" /* ProdutoPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\git\ionic-pdv\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Rei dos Pisos</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div class="btn-menu" (click)="navCtrl.push(pdvPage)">\n        <ion-icon name="cart"></ion-icon>\n        <h2>PDV</h2>\n    </div>\n    <div class="btn-menu" (click)="navCtrl.push(clientePage)">\n        <ion-icon name="person"></ion-icon>\n        <h2>CLIENTE</h2>\n    </div>\n    <div class="btn-menu" (click)="navCtrl.push(produtoPage)">\n        <ion-icon name="cube"></ion-icon>\n        <h2>PRODUTO</h2>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\git\ionic-pdv\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_dados_dados__["DadosProvider"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_dados_dados__["DadosProvider"]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdvPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pagamento_pagamento__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_orcamento__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// @IonicPage()
var PdvPage = /** @class */ (function () {
    function PdvPage(navCtrl, loadingCtrl, navParams, pagamentoProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.pagamentoProvider = pagamentoProvider;
        this.orcamento = new __WEBPACK_IMPORTED_MODULE_3__model_orcamento__["c" /* Orcamento */]();
    }
    PdvPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.orcamento);
        var load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
        setTimeout(function () {
            load.dismiss();
        }, 20000);
        load.present();
        this.pagamentoProvider.getHttpPagamentos().subscribe(function (res) {
            _this.pagamentoProvider.setPagamentos(res.formaPagamento);
            _this.formasPagamento = _this.pagamentoProvider.getAllFormasPagamento();
        }, function (err) { return console.log(err); }, function () { return load.dismiss(); });
    };
    PdvPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pdv',template:/*ion-inline-start:"C:\git\ionic-pdv\src\pages\pdv\pdv.html"*/'<!--\n  Generated template for the PdvPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>PDV</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label>Forma de pagamento</ion-label>\n            <ion-select [(ngModel)]="orcamento.condPagamento">\n                <ion-option *ngFor="let formaPg of formasPagamento" value="{{formaPg.CodFormaPg}}">{{formaPg.Nome}}</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\git\ionic-pdv\src\pages\pdv\pdv.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pagamento_pagamento__["a" /* PagamentoProvider */]])
    ], PdvPage);
    return PdvPage;
}());

//# sourceMappingURL=pdv.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_orcamento__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cliente_cliente__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Operators__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Observable operators


// @IonicPage()
var ClientePage = /** @class */ (function () {
    function ClientePage(loadingCtrl, navCtrl, navParams, clienteProvider, orderPipe, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clienteProvider = clienteProvider;
        this.orderPipe = orderPipe;
        this.alertCtrl = alertCtrl;
        this.cliente = new __WEBPACK_IMPORTED_MODULE_2__model_orcamento__["a" /* Cliente */]();
        this.clientes = new Array();
        this.nomeFilter = "";
        this.searchNome = "";
        this.debounce = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    ClientePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
        setTimeout(function () {
            load.dismiss();
        }, 20000);
        load.present();
        this.clienteProvider.getHttpAllCliente()
            .subscribe(function (res) {
            _this.clienteProvider.setAllCliente(res);
            _this.clientes = _this.orderPipe.transform(_this.clienteProvider.getAllCliente(), 'nome');
        }, function (err) { return console.log(err); }, function () { return load.dismiss(); });
        this.debounce
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_Operators__["debounceTime"])(500))
            .subscribe(function (filter) { return _this.searchNome = filter; });
    };
    ClientePage.prototype.EditarCliente = function (cliente) {
        this.navCtrl.push('ClienteFormPage', { clienteSelecionado: cliente });
    };
    ClientePage.prototype.CadastrarCliente = function () {
        var cliente = new __WEBPACK_IMPORTED_MODULE_2__model_orcamento__["a" /* Cliente */]();
        this.navCtrl.push('ClienteFormPage', { clienteSelecionado: cliente });
    };
    ClientePage.prototype.ngOnInit = function () {
    };
    ClientePage.prototype.ngOnDestroy = function () {
        this.debounce.unsubscribe();
    };
    ClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cliente',template:/*ion-inline-start:"C:\git\ionic-pdv\src\pages\cliente\cliente.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title>Clientes</ion-title>\n        <button ion-button clear icon-only (click)="CadastrarCliente()"><ion-icon name="add" ></ion-icon></button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar [(ngModel)]="nomeFilter" (keyup)="debounce.next($event.target.value)"></ion-searchbar>\n\n    <!-- <ion-item>\n        <ion-label floating>Buscar por Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="nomeFilter" name="nome" (keyup)="debounce.next($event.target.value)" uppercase></ion-input>\n    </ion-item> -->\n    <ion-item>\n        <ion-label>Exibir Inativo</ion-label>\n        <ion-checkbox [(ngModel)]="exibirInativo" color="blue" checked="true" (change)="filtrarInativo()"></ion-checkbox>\n    </ion-item>\n    <!-- <ion-list *ngFor="let cliente of clientes | filter: searchNome | orderBy : \'nome\' : 0 : 1" (click)="EditarCliente(cliente)"> -->\n    <ion-list *ngFor="let cliente of clientes | filter: searchNome" (click)="EditarCliente(cliente)">\n        <button ion-item *ngIf="cliente.ativo || exibirInativo ">\n    {{ cliente.nome | uppercase}}\n  </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\git\ionic-pdv\src\pages\cliente\cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cliente_cliente__["a" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["b" /* OrderPipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ClientePage);
    return ClientePage;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClienteProvider = /** @class */ (function () {
    function ClienteProvider(http) {
        this.http = http;
        this.config = new __WEBPACK_IMPORTED_MODULE_4__assets_config__["a" /* Config */];
    }
    ClienteProvider.prototype.getAllCliente = function () {
        return this.clientes;
    };
    ClienteProvider.prototype.setAllCliente = function (_clientes) {
        this.clientes = _clientes;
    };
    ClienteProvider.prototype.addCliente = function (_cliente) {
        this.clientes.push(_cliente);
    };
    ClienteProvider.prototype.getEndereco = function (cep) {
        return this.http.get("http://viacep.com.br/ws/" + cep + "/json/ ");
    };
    ClienteProvider.prototype.getCliente = function (id) {
        return this.http.get(this.config.url + "Cliente/" + id);
    };
    ClienteProvider.prototype.getHttpAllCliente = function () {
        return this.http.get(this.config.url + "Cliente").map(function (res) { return res; });
    };
    // getAllCliente(){
    //   this.http.get<Cliente[]>(this.config.url + "Cliente").map((res:Array<Cliente>)=>{
    //     return res
    //   }
    //   );    
    // }
    ClienteProvider.prototype.saveCliente = function (_cliente) {
        return this.http.post(this.config.url + "Cliente?", _cliente, { responseType: 'text' });
    };
    // updateCliente(_cliente: Cliente):Observable<string>{
    //   return this.http.put(this.config.url+"Cliente/" + _cliente.codCliente, _cliente, {responseType: 'text'});
    // }
    ClienteProvider.prototype.deleteCliente = function (_cliente) {
        return this.http.delete(this.config.url + "Cliente/" + _cliente.codCliente);
    };
    ClienteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ClienteProvider);
    return ClienteProvider;
}());

//# sourceMappingURL=cliente.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Operators__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Observable operators

// Pipes

//@IonicPage()
var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl, navParams, produtoProvider, orderPipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtoProvider = produtoProvider;
        this.orderPipe = orderPipe;
        this.produtos = [];
        this.produtosFull = [];
        this.produtoFilter = "";
        this.searchProduto = "";
        this.debounce = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    ProdutoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.produtoProvider.getHttpAllProduto()
            .subscribe(function (res) {
            _this.produtoProvider.setAllProduto(res);
            _this.produtosFull = _this.orderPipe.transform(_this.produtoProvider.getAllProduto(), 'nome');
            for (var i = 0; i < 30; i++) {
                _this.produtos.push(_this.produtosFull[_this.produtos.length + i]);
            }
        });
        // this.produtos = this.produtoProvider.getAllProduto();
        this.debounce
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_Operators__["debounceTime"])(600))
            .subscribe(function (filter) {
            _this.produtos = [];
            var aux = _this.filtrar(_this.produtosFull, filter);
            for (var i = 0; i < 30 && aux[i] !== undefined; i++) {
                _this.produtos.push(aux[i]);
            }
            console.log(_this.produtos);
        });
    };
    ProdutoPage.prototype.ngOnDestroy = function () {
        this.debounce.unsubscribe();
    };
    ProdutoPage.prototype.exibirDetalhes = function (_produto) {
        if (this.produtos) {
            this.produtos.forEach(function (item) {
                if (_produto.codProduto == item.codProduto) {
                    item.open = !item.open;
                }
                else
                    item.open = false;
            });
        }
    };
    ProdutoPage.prototype.doInfinite = function (infiniteScroll) {
        var aux = this.filtrar(this.produtosFull, this.produtoFilter);
        for (var i = 0; i < 30 && aux[this.produtos.length + i] !== undefined; i++) {
            this.produtos.push(aux[this.produtos.length + i]);
        }
        // for (let i = 0; i < 30; i++) {
        //   this.produtos.push( this.produtosFull[this.produtos.length + i]);
        // }
        console.log(this.produtos);
        infiniteScroll.complete();
    };
    ProdutoPage.prototype.filtrar = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText) {
            // let aux = [];
            // for (let i = 0; i < 30 ; i++) {
            //   aux.push( this.produtosFull[i]);
            // }
            // return aux;
            return items;
        }
        searchText = searchText.toString().toUpperCase();
        return items.filter(function (it) {
            var nome = it.nome.toString().toUpperCase();
            return nome.includes(searchText);
        });
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"C:\git\ionic-pdv\src\pages\produto\produto.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Produtos</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-searchbar [(ngModel)]="produtoFilter" (keyup)="debounce.next($event.target.value)"></ion-searchbar>\n\n    <!-- <ion-card *ngFor="let produto of produtos | filter: searchProduto | orderBy : \'nome\' : 0 : 1"> -->\n    <ion-card *ngFor="let produto of produtos">\n        <ion-card-header>\n            {{produto.nome}}\n        </ion-card-header>\n        <ion-card-content>\n            <ion-col>\n                <ion-item>\n\n                    <p>\n                        <ion-icon name="card"></ion-icon> {{produto.precoVenda | currency:\'BRL\'}}</p>\n                </ion-item>\n                <ion-item>\n\n                    <p>\n                        <ion-icon name="cash" class="green"></ion-icon> {{produto.pesoL | currency:\'BRL\'}}</p>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n\n                    <p>\n                        <ion-icon name="cube"></ion-icon>Estoque: {{produto.quantEstoque}}</p>\n                </ion-item>\n                <ion-item>\n\n                    <p>\n                        <ion-icon name="cube" class="yellow"></ion-icon>Reservado: {{produto.quantReserva}}</p>\n                </ion-item>\n            </ion-col>\n        </ion-card-content>\n        <ion-row class="detalhes" [ngClass]="{\'active\': produto.open}">\n            <ion-item>\n                <p>TAMANHO: {{produto.tamanho}}</p>\n            </ion-item>\n            <ion-item>\n                <p>QUANT. PEÇAS NA CAIXA: {{produto.pecaCaixa}}</p>\n            </ion-item>\n            <ion-item>\n                <p>M² NA CAIXA: {{produto.m2Caixa}}</p>\n            </ion-item>\n        </ion-row>\n        <ion-row (click)="exibirDetalhes(produto)">\n            <ion-col class="btn-detalhes" center>\n                <ion-icon name="add"></ion-icon>\n            </ion-col>\n        </ion-row>\n\n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\git\ionic-pdv\src\pages\produto\produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_produto_produto__["a" /* ProdutoProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["b" /* OrderPipe */]])
    ], ProdutoPage);
    return ProdutoPage;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cliente-form/cliente-form.module": [
		216
	],
	"../pages/login/login.module": [
		193
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\git\\ionic-pdv\\src\\providers\\dados\\dados.ts'");

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the PagamentoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PagamentoProvider = /** @class */ (function () {
    function PagamentoProvider(http) {
        this.http = http;
        this.config = new __WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* Config */];
        console.log('Hello PagamentoProvider Provider');
    }
    PagamentoProvider.prototype.getHttpPagamentos = function () {
        return this.http.get(this.config.url + "TabelasBasicas").map(function (res) { return res; });
    };
    PagamentoProvider.prototype.setPagamentos = function (_pagamentos) {
        this.formasPagamento = _pagamentos;
    };
    PagamentoProvider.prototype.getAllFormasPagamento = function () {
        return this.formasPagamento;
    };
    PagamentoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PagamentoProvider);
    return PagamentoProvider;
}());

//# sourceMappingURL=pagamento.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_produto__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProdutoProvider = /** @class */ (function () {
    function ProdutoProvider(http) {
        this.http = http;
        this.config = new __WEBPACK_IMPORTED_MODULE_3__assets_config__["a" /* Config */];
    }
    ProdutoProvider.prototype.getAllProduto = function () {
        return this.produtos;
    };
    ProdutoProvider.prototype.setAllProduto = function (_produtos) {
        this.produtos = _produtos;
    };
    ProdutoProvider.prototype.getHttpAllProduto = function () {
        return this.http.get(this.config.url + "Produto/");
    };
    ProdutoProvider.prototype.getProduto = function (_id) {
        this.produtos.forEach(function (element) {
            if (element.codProduto == _id)
                return element;
        });
        return new __WEBPACK_IMPORTED_MODULE_2__model_produto__["a" /* Produto */]();
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteFormPageModule", function() { return ClienteFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_form__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClienteFormPageModule = /** @class */ (function () {
    function ClienteFormPageModule() {
    }
    ClienteFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cliente_form__["a" /* ClienteFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cliente_form__["a" /* ClienteFormPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cliente_form__["a" /* ClienteFormPage */]
            ]
        })
    ], ClienteFormPageModule);
    return ClienteFormPageModule;
}());

//# sourceMappingURL=cliente-form.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(268);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pdv_pdv__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dados_dados__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dados_dados___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__providers_dados_dados__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cliente_cliente__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_orcamento_orcamento__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_loading_loading__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_produto_produto__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_pipes_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_order_pipe__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cliente_form_cliente_form_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_pagamento_pagamento__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























// import { ComponentsModule } from '../components/components.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pdv_pdv__["a" /* PdvPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__["a" /* ProdutoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cliente-form/cliente-form.module#ClienteFormPageModule', name: 'ClienteFormPage', segment: 'cliente-form', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_order_pipe__["a" /* OrderModule */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_cliente_form_cliente_form_module__["ClienteFormPageModule"]
                // ComponentsModule
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cliente_cliente__["a" /* ClientePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pdv_pdv__["a" /* PdvPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__["a" /* ProdutoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_dados_dados__["DadosProvider"],
                __WEBPACK_IMPORTED_MODULE_12__providers_cliente_cliente__["a" /* ClienteProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_orcamento_orcamento__["a" /* OrcamentoProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_login_login__["a" /* LoginProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_loading_loading__["a" /* LoadingProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_produto_produto__["a" /* ProdutoProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_pagamento_pagamento__["a" /* PagamentoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Produto; });
/* unused harmony export Embalagem */
/* unused harmony export Categoria */
/* unused harmony export Unidade */
/* unused harmony export Marca */
//A coluna PesoL guarda o valor do preço para dinheiro.
var Produto = /** @class */ (function () {
    function Produto() {
        this.open = false;
    }
    return Produto;
}());

var Embalagem = /** @class */ (function () {
    function Embalagem() {
    }
    return Embalagem;
}());

var Categoria = /** @class */ (function () {
    function Categoria() {
    }
    return Categoria;
}());

var Unidade = /** @class */ (function () {
    function Unidade() {
    }
    return Unidade;
}());

var Marca = /** @class */ (function () {
    function Marca() {
    }
    return Marca;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_orcamento__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cliente_cliente__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteFormPage = /** @class */ (function () {
    function ClienteFormPage(clienteProvider, navCtrl, navParams, loadingCtrl, toast) {
        this.clienteProvider = clienteProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.cliente = new __WEBPACK_IMPORTED_MODULE_2__model_orcamento__["a" /* Cliente */]();
    }
    ClienteFormPage.prototype.ionViewDidLoad = function () {
        this.cliente = this.navParams.get('clienteSelecionado');
    };
    ClienteFormPage.prototype.upper = function (val) {
        this.cliente.nome = val.toUpperCase();
    };
    ClienteFormPage.prototype.buscarCep = function (cep) {
        var _this = this;
        if (cep.length == 8) {
            console.log(cep);
            this.clienteProvider.getEndereco(cep).
                subscribe(function (res) {
                _this.cliente.bairro = res.bairro;
                _this.cliente.endereco = res.logradouro;
                _this.cliente.uf = res.uf;
                _this.cliente.municipio = res.localidade;
            });
        }
    };
    ClienteFormPage.prototype.saveCliente = function (_cliente) {
        var _this = this;
        var load = this.loadingCtrl.create({ content: "Aguarde um momento..." });
        load.present();
        this.clienteProvider.saveCliente(_cliente).map(function (res) { return JSON.parse(res); }).subscribe(function (res) {
            console.log(res);
            if (res.Type == "Error") {
                _this.toast.create({ message: "Ocorreu um erro ao salvar", duration: 3000, position: "botton" }).present();
            }
            else {
                if (res.nome) {
                    _this.clienteProvider.addCliente(res);
                    _this.toast.create({ message: "Cliente salvo com sucesso!", duration: 3000, position: "botton" }).present();
                }
                else
                    _this.toast.create({ message: "Cliente atualizado com sucesso!", duration: 3000, position: "botton" }).present();
            }
        }, function (err) {
            alert("Ocorreu um erro ao salvar");
            _this.toast.create({ message: "Ocorreu um erro ao salvar", duration: 3000, position: "botton" }).present();
            console.log(err);
        }, function () {
            load.dismiss();
            _this.navCtrl.pop();
        });
    };
    ClienteFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cliente-form',template:/*ion-inline-start:"C:\git\ionic-pdv\src\pages\cliente-form\cliente-form.html"*/'<ion-header>\n\n    <ion-navbar class="barra-menu">\n        <!-- <ion-icon name="arrow-back" navPop></ion-icon> -->\n        <ion-title>Informaçõe do Cliente</ion-title>\n        <img src="./assets/icon/save.svg" alt="Salvar" (click)="saveCliente(cliente)">\n        <!-- <ion-icon name="md-albums" "></ion-icon> -->\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.nome" name="nome" (input)="upper($event.target.value)"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>CEP</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.cep" name="cep" (keyup)="buscarCep($event.target.value)"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Endereço</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.endereco" name="endereco"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Número</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.numero" name="numero"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Complemento</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.complemento" name="complemento"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Bairro</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.bairro" name="bairro"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Município</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.municipio" name="municipio"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>UF</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.uf" name="uf"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>CPF</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.cpf" name="cpf"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>RG</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.rg" name="rg"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.email" name="email"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Obs</ion-label>\n        <ion-input type="text" [(ngModel)]="cliente.obs" name="obs"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Ativo</ion-label>\n        <ion-checkbox [(ngModel)]="cliente.ativo" color="blue" checked="true"></ion-checkbox>\n    </ion-item>\n</ion-content>'/*ion-inline-end:"C:\git\ionic-pdv\src\pages\cliente-form\cliente-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_cliente_cliente__["a" /* ClienteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ClienteFormPage);
    return ClienteFormPage;
}());

//# sourceMappingURL=cliente-form.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pdv_pdv__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cliente_cliente__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, login) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.login = login;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "home" },
            { title: 'PDV', component: __WEBPACK_IMPORTED_MODULE_5__pages_pdv_pdv__["a" /* PdvPage */], icon: "cart" },
            { title: 'CLIENTE', component: __WEBPACK_IMPORTED_MODULE_6__pages_cliente_cliente__["a" /* ClientePage */], icon: "person" },
            { title: 'PRODUTO', component: __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__["a" /* ProdutoPage */], icon: "cube" },
        ];
        platform.registerBackButtonAction(function () {
            if (_this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] || _this.nav.getActive().component == __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]) {
                if (confirm("Deseja Encerrar?"))
                    platform.exitApp();
            }
            else
                _this.nav.pop();
        }, 1);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.login.emitirUsuario.subscribe(function (res) { return _this.usuario = res; });
            _this.nav.setPages(_this.nav.getViews(), { animate: true, animation: "slide" });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */])
            this.nav.setRoot(page.component);
        else
            this.nav.push(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        this.storage.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\git\ionic-pdv\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <h2 class="side-title">\n            {{usuario}}\n            <!-- <perfil></perfil> -->\n        </h2>\n        <img src="assets/imgs/perfil-color.jpg" alt="">\n    </ion-header>\n\n    <ion-content class="menu">\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                    <ion-icon [name]="p.icon"></ion-icon> {{p.title}}\n\n      </button>\n        </ion-list>\n    </ion-content>\n    <ion-footer>\n        <button menuClose ion-item (click)="logout()" class="menu-footer">\n                    <ion-icon name="exit"></ion-icon> LOGOUT\n\n      </button>\n\n    </ion-footer>\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\git\ionic-pdv\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_login_login__["a" /* LoginProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrcamentoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_config__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrcamentoProvider = /** @class */ (function () {
    function OrcamentoProvider(http) {
        this.http = http;
        this.config = new __WEBPACK_IMPORTED_MODULE_2__assets_config__["a" /* Config */];
        console.log('Hello OrcamentoProvider Provider');
    }
    OrcamentoProvider.prototype.salvarItem = function (item) {
        return this.http.post(this.config.url + "orcamento?", item);
    };
    OrcamentoProvider.prototype.cancelarItem = function (item) {
        item.ativo = false;
        return this.http.post(this.config.url + "orcamento?", item);
    };
    OrcamentoProvider.prototype.listarItens = function (numOrcamento) {
        return this.http.get(this.config.url + "orcamento/" + numOrcamento);
    };
    OrcamentoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], OrcamentoProvider);
    return OrcamentoProvider;
    var _a;
}());

//# sourceMappingURL=orcamento.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        var load = this.loadingCtrl.create({
            content: "Aguarde um momento..."
        });
        load.present();
    }
    LoadingProvider.prototype.showLoad = function () {
    };
    LoadingProvider.prototype.dismissLoad = function () {
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_filter__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upper_upper__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { OrderPipe } from 'ngx-order-pipe';
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_2__upper_upper__["a" /* UpperPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__filter_filter__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_2__upper_upper__["a" /* UpperPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toString().toUpperCase();
        return items.filter(function (it) {
            var nome = it.nome.toString().toUpperCase();
            return nome.includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpperPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpperPipe = /** @class */ (function () {
    function UpperPipe() {
    }
    UpperPipe.prototype.transform = function (value) {
        console.log(value);
        return value.toUpperCase();
    };
    UpperPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'upper',
        })
    ], UpperPipe);
    return UpperPipe;
}());

//# sourceMappingURL=upper.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
        this.url = "http://reidospisos.azurewebsites.net/api/";
    }
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Orcamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
/* unused harmony export FormaPagamento */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Funcionario; });
/* unused harmony export Item */
var Orcamento = /** @class */ (function () {
    function Orcamento() {
        // condPagamento: CondicaoPagamento;
        this.condPagamento = 0;
    }
    return Orcamento;
}());

var Cliente = /** @class */ (function () {
    function Cliente() {
        this.registro = -1;
        this.codCliente = -1;
        this.ativo = true;
    }
    return Cliente;
}());

var CondicaoPagamento = /** @class */ (function () {
    function CondicaoPagamento() {
    }
    return CondicaoPagamento;
}());
var FormaPagamento = /** @class */ (function () {
    function FormaPagamento() {
    }
    return FormaPagamento;
}());

var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.nome = "";
        this.senha = "";
    }
    return Funcionario;
}());

var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());

//# sourceMappingURL=orcamento.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginProvider = /** @class */ (function () {
    function LoginProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.config = new __WEBPACK_IMPORTED_MODULE_4__assets_config__["a" /* Config */];
        this.emitirUsuario = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
    }
    LoginProvider.prototype.logar = function (usuario) {
        return this.http.post(this.config.url + "login?", usuario);
    };
    LoginProvider.prototype.getLogado = function () {
        return this.storage.get('funcionario');
    };
    LoginProvider.prototype.setUsuario = function (_usuario) {
        this.usuario = _usuario.nome;
        this.storage.set('funcionario', _usuario);
        this.emitirUsuario.emit(_usuario.nome);
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[260]);
//# sourceMappingURL=main.js.map