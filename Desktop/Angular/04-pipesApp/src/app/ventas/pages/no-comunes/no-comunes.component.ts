import { Component } from '@angular/core';
import { rejects } from 'assert';
import { interval } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[]= ['maria','pedro','juan','eduardo','fernando'];
  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){

    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  borrarCliente(){
    // el .pop() va elminando el ultimo de a 1 
    this.clientes.pop();
  }

  // keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'ottawa, canada'
  }

  //jsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,

    },
    {
      nombre: 'Robin',
      vuela: false,

    },
    {
      nombre: 'Aquaman',
      vuela: false,

    }
  ];

  //AsyncPipe
  miObservable = interval(2000); //0,1,2,3,4,5,6,+++++ hasta el 1000
  
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
