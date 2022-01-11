import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showForm = false;
  formGroup: FormGroup = this.formBuild.group({});

  constructor(private formBuild: FormBuilder, private storage: Storage, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuild.group({
      email: [null, [Validators.required]]
    });

    this.showForm = true;
  }

  submit() {
    this.storage.create();
    this.storage.set('Token', this.formGroup.value['email']).then(() => this.router.navigateByUrl('/annonces'));
  }

}
