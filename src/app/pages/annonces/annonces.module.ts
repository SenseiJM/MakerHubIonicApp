import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncesPageRoutingModule } from './annonces-routing.module';

import { AnnoncesPage } from './annonces.page';
import { ImagePipe } from 'src/app/pipes/image.pipe';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnoncesPageRoutingModule
  ],
  declarations: [AnnoncesPage, ImagePipe, TruncatePipe]
})
export class AnnoncesPageModule {}
