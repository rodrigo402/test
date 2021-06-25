import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisesSmall } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
  
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]

  });

  // llenar selectores
  regiones: string [] = [];
  paises: PaisesSmall[] = [];
  fronteras: PaisesSmall[] = [];

  // cargando
  cargando: boolean = false;



  constructor( private fb: FormBuilder,
                private paisesService: PaisesServiceService) { }

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;
// cuando cambia la region resetea el campo pais
    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( (_) => {
        this.miFormulario.get('pais').reset('');
        this.cargando = true;
      }),
      switchMap(region =>this.paisesService.getpaisesPorRegion(region) )
    )
      .subscribe(paises => {
        this.paises = paises;
        this.cargando = false;
      });

  // cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap( ()=> {
     
      this.miFormulario.get('frontera')?.reset('');
      this.cargando = true;
      }),
      switchMap(codigo => this.paisesService.getPaisPorCodigo(codigo)),
      switchMap(pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
    )
    .subscribe(paises => {
      
      this.fronteras = paises;
      this.cargando = false;
    })
  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}
