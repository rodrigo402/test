import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  
  // crea un get para obtener el historial de busqueda
  get historial(){
    return this.GifsService.historial;
  }

  // injecta el servicio para obtener el historial de busquedas
  constructor(private GifsService: GifsService) { }

  buscar(termino: string){
   this.GifsService.buscarGifs(termino);
  }
  
}
