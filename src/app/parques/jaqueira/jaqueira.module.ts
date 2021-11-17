import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JaqueiraPageRoutingModule } from './jaqueira-routing.module';

import { JaqueiraPage } from './jaqueira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JaqueiraPageRoutingModule
  ],
  declarations: [JaqueiraPage]
})
export class JaqueiraPageModule {}
