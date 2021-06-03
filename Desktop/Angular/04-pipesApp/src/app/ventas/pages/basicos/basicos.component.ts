import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Rodrigo';
  nombreUpper: string = 'RODRIGO';
  nombreCompleto: string = 'Rodrigo ReYNoso';

  fecha: Date = new Date(); //Fecha de hoy

}
