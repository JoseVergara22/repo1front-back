// src/app/services/inicio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPayments(): Observable<any> {
    return this.http.get(this.apiUrl+'/payment');
  }

  postPayments(data:any): Observable<any> {
    return this.http.post(this.apiUrl+'/payment',data);
  }


  /////Acaa servicios para Post de personajes
  getPersonajes(): Observable<any> {
    return this.http.get(this.apiUrl+'/personajes');
  }

  postPersonaje(data:any): Observable<any> {
    return this.http.post(this.apiUrl+'/personajes',data);
  }


  ////
}
