import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PERSONAJESPageRoutingModule } from './personajes-routing.module';

import { PERSONAJESPage } from './personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PERSONAJESPageRoutingModule
  ],
  declarations: [PERSONAJESPage]
})
export class PERSONAJESPageModule {}
