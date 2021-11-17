import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JaqueiraPage } from './jaqueira.page';

const routes: Routes = [
  {
    path: '',
    component: JaqueiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JaqueiraPageRoutingModule {}
