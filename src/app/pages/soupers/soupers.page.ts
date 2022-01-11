import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Souper } from 'src/app/interfaces/souper';
import { SouperService } from 'src/app/services/souper.service';

@Component({
  selector: 'app-soupers',
  templateUrl: './soupers.page.html',
  styleUrls: ['./soupers.page.scss'],
})
export class SoupersPage implements OnInit {

  listeSoupers: Souper[] = [];

  constructor(private sService: SouperService, private router: Router) { }

  ngOnInit() {
    this.chargerListeSoupers();
  }

  chargerListeSoupers() {
    this.sService.getAll().subscribe(
      (listFromApi: Souper[]) => {
        this.listeSoupers = listFromApi;
      }
    );
  }

  showDetails(souperId: number) {
    this.router.navigate(['soupers/souper-details', {id: souperId}]);
  }

}
