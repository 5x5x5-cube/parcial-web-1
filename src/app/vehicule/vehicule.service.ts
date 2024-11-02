import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Vehicule } from './vehicule';

@Injectable({
  providedIn: 'root',
})
export class VehiculeService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(this.apiUrl);
  }
}
