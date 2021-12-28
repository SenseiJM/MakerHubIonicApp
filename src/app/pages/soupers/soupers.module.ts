import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoupersPageRoutingModule } from './soupers-routing.module';

import { SoupersPage } from './soupers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoupersPageRoutingModule
  ],
  declarations: [SoupersPage]
})
export class SoupersPageModule {}
