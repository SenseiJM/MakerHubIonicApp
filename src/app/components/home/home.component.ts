import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/entities/Annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listeAnnonces!: Annonce[];

  constructor(private aService: AnnonceService) { }

  ngOnInit(): void {

    this.chargerListeAnnonces();

  }

  chargerListeAnnonces() {
    this.aService.getAllAnnonces().subscribe(
      (listFromApi: Annonce[]) => {
        this.listeAnnonces = listFromApi;
      }
    );
  }

}
