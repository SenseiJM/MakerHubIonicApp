import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnonceDetailsPageRoutingModule } from './annonce-details-routing.module';

import { AnnonceDetailsPage } from './annonce-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [AnnonceDetailsPage]
})
export class AnnonceDetailsPageModule {}
