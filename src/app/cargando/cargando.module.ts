import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CARGANDOPageRoutingModule } from './cargando-routing.module';

import { CARGANDOPage } from './cargando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CARGANDOPageRoutingModule
  ],
  declarations: [CARGANDOPage]
})
export class CARGANDOPageModule {}
