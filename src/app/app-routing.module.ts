import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TrainingComponent } from './components/training/training.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'components/home', component: HomeComponent},
  {path: 'components/teams', component: TeamsComponent},
  {path: 'components/competitions', component: CompetitionsComponent},
  {path: 'components/training', component: TrainingComponent},
  {path: 'components/events', component: EventsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
