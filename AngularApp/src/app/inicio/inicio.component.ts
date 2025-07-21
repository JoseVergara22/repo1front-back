import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from '../services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  nameTexto: string = '';
  phoneNumber: string = '';
  emailUser: string = '';

  constructor(private router: Router, private inicioService: InicioService) {}

  goToBackend() {
    console.log('entro');
    console.log('entro a la función');

    this.inicioService.getPayments().subscribe(
      (data) => {
        console.log('Respuesta del backend:', data);
      },
      (error) => {
        console.error('Error al conectar con el backend:', error);
      }
    );
  }

  goToBackendPost() {
    console.log('entro');
    console.log('entro a la función');

    this.inicioService.postPayments({ name: this.nameTexto, phone: this.phoneNumber, email: this.emailUser }).subscribe(
      (data) => {
        console.log('Respuesta del backend:', data);
      },
      (error) => {
        console.error('Error al conectar con el backend:', error);
      }
    );
  }


  ////
}
