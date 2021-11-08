import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/components/home', icon: 'home' },
    { title: 'Équipes', url: '/components/teams', icon: 'people' },
    { title: 'Compétitions', url: '/components/competitions', icon: 'trophy' },
    { title: 'Stages et Entraînements', url: '/components/training', icon: 'barbell' },
    { title: 'Événements', url: '/components/events', icon: 'balloon' }
  ];
  constructor() {}
}
