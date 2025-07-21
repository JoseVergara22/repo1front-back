// src/app/services/inicio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {
  private apiUrl = 'http://localhost:3000/payment';

  constructor(private http: HttpClient) {}

  getPayments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postPayments(data:any): Observable<any> {
    return this.http.post(this.apiUrl,data);
  }
}
