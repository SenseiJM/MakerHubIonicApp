import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Souper } from 'src/app/interfaces/souper';
import { SouperService } from 'src/app/services/souper.service';

@Component({
  selector: 'app-souper-details',
  templateUrl: './souper-details.page.html',
  styleUrls: ['./souper-details.page.scss'],
})
export class SouperDetailsPage implements OnInit {

  selectedSouper!: Souper;
  receivedId!: string;

  constructor(private route: ActivatedRoute, private sService: SouperService) { }

  ngOnInit() {
    this.receivedId = this.route.snapshot.paramMap.get('id');
    this.chargerSouper();
  }

  chargerSouper() {
    this.sService.getByID(+this.receivedId).subscribe(
      (souperFromApi: Souper) => {
        this.selectedSouper = souperFromApi;
      }
    );
  }

}
