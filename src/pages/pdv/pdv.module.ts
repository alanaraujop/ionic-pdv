import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdvPage } from './pdv';

@NgModule({
  declarations: [
    PdvPage,
  ],
  imports: [
    IonicPageModule.forChild(PdvPage),
  ],
})
export class PdvPageModule {}
