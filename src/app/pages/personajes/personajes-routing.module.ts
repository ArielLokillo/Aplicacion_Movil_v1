import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PERSONAJESPage } from './personajes.page';

const routes: Routes = [
  {
    path: '',
    component: PERSONAJESPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PERSONAJESPageRoutingModule {}
