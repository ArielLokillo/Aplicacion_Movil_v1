import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CATEGORIAPage } from './categoria.page';

const routes: Routes = [
  {
    path: '',
    component: CATEGORIAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CATEGORIAPageRoutingModule {}
