import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JoueurSouper } from '../interfaces/joueurSouper';

@Injectable({
  providedIn: 'root'
})
export class JoueurSouperService {

  url: string = environment.apiUrl;

  constructor(private client: HttpClient) { }

  createInscription(js: JoueurSouper) {
    return this.client.post<JoueurSouper>(this.url + 'api/JoueurSouper', js);
  }

}
