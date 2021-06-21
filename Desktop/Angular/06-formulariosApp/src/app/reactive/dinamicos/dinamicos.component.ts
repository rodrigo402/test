import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    // valida que el campo sea requerido y que tenga al menos 3 caracteres
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Death Strading', Validators.required]
    ], Validators.required)
  
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  campoEsValido( campo: string ){
    return this.miFormulario.controls[campo].errors
             && this.miFormulario.controls[campo].touched;
   }

   agregarFavorito(){
     if(this.nuevoFavorito.invalid){ return;}
// las 2 maneras de hacer un push al arreglo de favoritos
    //  this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required) );
     this.favoritosArr.push( this.fb.control(this.nuevoFavorito.value, Validators.required) );

     this.nuevoFavorito.reset();
   }

  guardar(){
    // pregunta si el formulario es invalido, si es valido imprime los datos
    // sino los marca todos como tocados y retornas
    if (this.miFormulario.valid){
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }else{
      this.miFormulario.markAllAsTouched();
      return;
      
    }
  
  }
  
  borrar(i: number){

    this.favoritosArr.removeAt(i);
  }
  

}
