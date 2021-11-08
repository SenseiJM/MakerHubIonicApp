import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Annonce } from '../entities/Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private url: string = environment.apiUrl;

  constructor(private client: HttpClient) { }

  getAllAnnonces(): Observable<Annonce[]> {
    return this.client.get<Annonce[]>(this.url + 'Annonce');
  }
}
