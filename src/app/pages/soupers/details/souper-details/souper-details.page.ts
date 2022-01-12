import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';
import { Souper } from 'src/app/interfaces/souper';
import { JoueurSouper } from 'src/app/interfaces/joueurSouper';
import { SouperService } from 'src/app/services/souper.service';
import { Storage } from '@ionic/storage-angular';
import { Token } from '@angular/compiler';
import { JoueurSouperService } from 'src/app/services/joueur-souper.service';
import { SouperModalPage } from '../../souper-modal/souper-modal.page';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-souper-details',
  templateUrl: './souper-details.page.html',
  styleUrls: ['./souper-details.page.scss'],
})
export class SouperDetailsPage implements OnInit {

  selectedSouper!: Souper;
  receivedId!: string;

  constructor(private route: ActivatedRoute, private sService: SouperService, private alertController: AlertController, private storage: Storage, private jsService: JoueurSouperService, private modalController: ModalController) { }

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

  async presentModal() {
    const modal = await this.modalController.create({
      component: SouperModalPage,
      componentProps: {
        'souperId': this.receivedId
      }
    });
    await modal.present();
    const {data} = await modal.onWillDismiss();
    if (data) {
      let js: JoueurSouper = {idSouper: +this.receivedId, nbReservations: data, token: await this.storage.get("Token")}
      this.jsService.createInscription(js).subscribe();
    }
    
  }



}
