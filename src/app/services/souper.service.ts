import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Souper } from '../interfaces/souper';

@Injectable({
  providedIn: 'root'
})
export class SouperService {

  private url = environment.apiUrl;

  constructor(private client: HttpClient) { }

  getAll(): Observable<Souper[]> {
    return this.client.get<Souper[]>(this.url + 'api/Souper/All');
  }

  getByID(id: number): Observable<Souper> {
    return this.client.get<Souper>(this.url + 'api/Souper/ByID/' + id);
  }

}
