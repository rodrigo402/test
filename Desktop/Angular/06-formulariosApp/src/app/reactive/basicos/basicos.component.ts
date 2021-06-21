import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit  {

  // arma el formulario usando FormGroup y los campos.
// miFormulario: FormGroup =  new FormGroup ({
//   nombre: new FormControl('RTX i8080'),
//   precio: new FormControl(1500),
//   existencias: new FormControl(5),
// })


// arma el formulario usando FormBuilder
//  (que es un servicio que hay que injectar en el constructor)
// y los campos, los valida con Validators
miFormulario: FormGroup = this.fb.group({
  // valida que el campo sea requerido y que tenga al menos 3 caracteres
  nombre: [ , [Validators.required, Validators.minLength(3)]],
  // valida que el campo sea requerido y que sea mayor a 0
  precio: [ , [Validators.required, Validators.min(0)]],
  existencias: [ , [Validators.required, Validators.min(0)]],

})

  constructor( private fb: FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'RTC123',
      precio: 12,
    })

  }

  // muestra el error con esta funcion
campoEsValido( campo: string ){
 return this.miFormulario.controls[campo].errors
          && this.miFormulario.controls[campo].touched;
}

guardar(){
  // pregunta si el formulario es invalido, si no cumple con la validaciones 
  if (this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched();
    return
  }

  console.log(this.miFormulario.value);
  this.miFormulario.reset();
}

}
