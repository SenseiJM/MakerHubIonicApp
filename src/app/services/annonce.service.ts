import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Annonce } from '../interfaces/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private url = environment.apiUrl;

  constructor(private client: HttpClient) { }

  getAll(): Observable<Annonce[]> {
    return this.client.get<Annonce[]>(this.url + 'api/Annonce/All');
  }

  getByID(id: number): Observable<Annonce> {
    return this.client.get<Annonce>(this.url + 'api/Annonce/ByID/' + id);
  }
}
