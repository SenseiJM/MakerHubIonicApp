import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'annonces',
    loadChildren: () => import('./pages/annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'annonces-details',
    loadChildren: () => import('./pages/annonces/details/annonce-details/annonce-details.module').then( m => m.AnnonceDetailsPageModule)
  },
  {
    path: 'soupers',
    loadChildren: () => import('./pages/soupers/soupers.module').then( m => m.SoupersPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
