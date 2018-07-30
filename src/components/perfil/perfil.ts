import { Component } from '@angular/core';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the PerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class PerfilComponent {

  usuario: string;

  constructor(login: LoginProvider) {
    console.log('Hello PerfilComponent Component');
    this.usuario = login.usuario;
  }

}
