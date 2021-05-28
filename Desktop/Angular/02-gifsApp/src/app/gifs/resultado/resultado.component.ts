import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

// trae los datos del observable
get resultados(){
  return this.GifsService.resultado;
}

  constructor( private GifsService: GifsService) { }

  

}
