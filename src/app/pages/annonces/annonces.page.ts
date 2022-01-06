import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annonce } from 'src/app/interfaces/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';
import { AnnonceDetailsPage } from './details/annonce-details/annonce-details.page';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {

  listeAnnonces: Annonce[] = [];

  constructor(private aService: AnnonceService, private router: Router) { }

  ngOnInit() {
    this.chargerListeAnnonces();
  }

  chargerListeAnnonces() {
    this.aService.getAll().subscribe(
      (listFromApi => {
        this.listeAnnonces = listFromApi;
      })
    );
  }

  showDetails(annonceId: number) {
    this.router.navigate(['annonce-details', {id: annonceId}]);
  }

}
