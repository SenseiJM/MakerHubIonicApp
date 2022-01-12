import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { JoueurSouperService } from 'src/app/services/joueur-souper.service';

@Component({
  selector: 'app-souper-modal',
  templateUrl: './souper-modal.page.html',
  styleUrls: ['./souper-modal.page.scss'],
})
export class SouperModalPage implements OnInit {

  @Input() souperId: string;

  formGroup: FormGroup = this.formBuilder.group({});

  constructor(private modalController: ModalController, private jsService: JoueurSouperService, private storage: Storage, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nbRepas: [null, [Validators.required]]
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async confirmerCommande(nbRepas: number) {
    let js = {
      idSouper : +this.souperId,
      nbReservations : nbRepas,
      token : await this.storage.get('Token')
    };
    this.jsService.createInscription(js).subscribe(
      () => {
        console.log("Commande effectuée");
      }
    );
    this.dismiss();
  }

  submit() {
    this.modalController.dismiss(this.formGroup.value["nbRepas"]);
  }

}
