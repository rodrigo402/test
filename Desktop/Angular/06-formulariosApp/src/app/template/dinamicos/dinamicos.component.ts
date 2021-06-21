import { Component} from '@angular/core';



interface Persona {
nombre: string;
favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

persona: Persona = {

  nombre: 'Fernando',
  favoritos: [
    {id: 1, nombre:'Metal Gear'},
    {id: 2, nombre:'DeathStranding'},
  ]
}



// funcion para eliminar un objeto del arreglo
// splice(la posicion y cuantos quiero borrar)
eliminar( index: number){
  this.persona.favoritos.splice(index,1);

}

agregarJuego(){
  // arma la estructura de datos para luego enviarla y agregarla al arreglo
const nuevoFavorito: Favorito ={
  id: this.persona.favoritos.length + 1,
  nombre: this.nuevoJuego
}
// con la funcion push() agrega los datos al arreglo
this.persona.favoritos.push({...nuevoFavorito});
this.nuevoJuego = '';
}

  guardar(){
    console.log('Formulario posteado');
  }

}
