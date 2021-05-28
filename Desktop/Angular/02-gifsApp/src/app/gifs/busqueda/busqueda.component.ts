import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild('textBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  // en el constructor se injectan los servicios.
  // injecta el servicio GifsService,es donde esta la funcion de agregar
  constructor(private gifsService: GifsService){}
  Buscar(){
   
    const valor = this.txtBuscar.nativeElement.value;
    if( valor.trim().length == 0){
      return;
    }
    // llama a travez del servicio la funcion buscar y le pasa valor
    this.gifsService.buscarGifs(valor);
    // vacia la caja de texto de buscar 
    this.txtBuscar.nativeElement.value= '';

  }

}
