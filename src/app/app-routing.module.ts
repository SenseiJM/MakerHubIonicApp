import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/annonces', pathMatch: 'full'
  },
  {
    path: 'annonces',
    loadChildren: () => import('./pages/annonces/annonces.module').then( m => m.AnnoncesPageModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'soupers',
    loadChildren: () => import('./pages/soupers/soupers.module').then( m => m.SoupersPageModule),
    canActivate: [IsLoggedGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
