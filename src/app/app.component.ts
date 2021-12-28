import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Annonces', url: '/annonces', icon: 'notifications' },
    { title: 'Soupers', url: '/soupers', icon: 'wine' },
  ];

  constructor() {}
}
