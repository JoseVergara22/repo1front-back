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
  personajes: any;

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

    this.inicioService.postPayments({}).subscribe(
      (data) => {
        console.log('Respuesta del backend:', data);
      },
      (error) => {
        console.error('Error al conectar con el backend:', error);
      }
    );
  }

  goGetBackend() {
    console.log('entro');
    console.log('entro a la función');

    // this.inicioService.getPersonajes().subscribe(
    //   (data) => {
    //     console.log('Respuesta del backend:', data);
    //     this.personajes = data;
    //     console.log('Acaaa personajes en declaracion', this.personajes);
    //   },
    //   (error) => {
    //     console.error('Error al conectar con el backend:', error);
    //   }
    // );

    // console.log('entro');
    // console.log('entro a la función');

    this.inicioService.getPersonajes().subscribe({
      next: (data) => {
        console.log('Respuesta del backend:', data);
        this.personajes = data;
        console.log('Acaaa personajes en declaracion', this.personajes);
      },
      error: (error) => {
        console.error('Error al conectar con el backend:', error);
      },
    });
  }

  postPersonaje() {
    const postData = {
      nombre: 'valentina Bouzas',
      edad: 25,
      estatura: 2.8,
    };
    this.inicioService.postPersonaje(postData).subscribe(
      (data) => {
        console.log('Respuesta del backend en el Post:', data);
      },
      (error) => {
        console.error('Error al conectar con el backend:', error);
      }
    );
    console.log(postData);
  }

  removepersonaje(personaje: any) {
    console.log('Acaaa personaje pasado', personaje);
  }

  ////
}
