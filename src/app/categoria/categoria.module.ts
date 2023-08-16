import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CATEGORIAPageRoutingModule } from './categoria-routing.module';

import { CATEGORIAPage } from './categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CATEGORIAPageRoutingModule
  ],
  declarations: [CATEGORIAPage]
})
export class CATEGORIAPageModule {}
