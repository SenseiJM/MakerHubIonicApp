import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoupersPageRoutingModule } from './soupers-routing.module';

import { SoupersPage } from './soupers.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SouperModalPage } from './souper-modal/souper-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoupersPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [SoupersPage, SouperModalPage]
})
export class SoupersPageModule {}
