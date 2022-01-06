import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnoncesPage } from './annonces.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncesPage
  },
  {
    path: 'annonce-details',
    loadChildren: () => import('./details/annonce-details/annonce-details.module').then( m => m.AnnonceDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncesPageRoutingModule {}
