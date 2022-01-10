import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouperDetailsPageRoutingModule } from './souper-details-routing.module';

import { SouperDetailsPage } from './souper-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouperDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [SouperDetailsPage]
})
export class SouperDetailsPageModule {}
