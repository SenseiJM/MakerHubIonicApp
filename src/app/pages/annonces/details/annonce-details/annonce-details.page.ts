import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from 'src/app/interfaces/annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {

  receivedId!: string;
  selectedAnnonce!: Annonce;

  constructor(private route: ActivatedRoute, private aService: AnnonceService) { }

  ngOnInit() {
    this.receivedId = this.route.snapshot.paramMap.get('id');
    this.chargerAnnonce();
  }

  chargerAnnonce() {
    this.aService.getByID(+this.receivedId).subscribe(
      (annonceFromApi: Annonce) => {
        this.selectedAnnonce = annonceFromApi;
      }
    );
  }

}
