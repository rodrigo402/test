import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
      button {
        margin-right: 5px;
      }
  `
  ]
})
export class PorRegionComponent {

  regiones = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private PaisService: PaisService) { }

  getClaseCSS( region : string): string{
  return (region == this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

 activarRegion (region: string){
  //  pregunta si esta recibiendo el mismo dato para no cargar de nuevo la pag.
   if(region == this.regionActiva){return;}
   this.regionActiva = region;
  //  limpia el arreglo paises para agilizar a vista y no consultarlo de nuevo.
   this.paises = [];
  //  el servicio recibe el dato y se lo asigna a la var paises
  this.PaisService.buscarRegion(region)
  .subscribe( paises => this.paises = paises );
  }


}
