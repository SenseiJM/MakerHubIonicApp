import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoupersPage } from './soupers.page';

const routes: Routes = [
  {
    path: '',
    component: SoupersPage
  },
  {
    path: 'souper-details',
    loadChildren: () => import('./details/souper-details/souper-details.module').then( m => m.SouperDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoupersPageRoutingModule {}
