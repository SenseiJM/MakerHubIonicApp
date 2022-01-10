import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SouperDetailsPage } from './souper-details.page';

const routes: Routes = [
  {
    path: '',
    component: SouperDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SouperDetailsPageRoutingModule {}
