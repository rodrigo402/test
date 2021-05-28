import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'DXEfVeHfMc8CTwhuKpZ6pkrzOp8EEN8w';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  
  private _historial: string[] = [];

// cambiar el tipo de datos any
  public resultado: Gif[]= [];


  get historial() {
   
    return [...this._historial];
  }

  // injecta el servicio http, para hacer peticiones a observable
  constructor(private http: HttpClient){
  
    // cargar datos desde localStorage 
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    this.resultado = JSON.parse( localStorage.getItem('resultado')! ) || [];
    
  }

  buscarGifs(query: string) {
   
    // define el campo de texto de busqueda en minuscula para evitar las mismas palabras
    query = query.trim().toLocaleLowerCase();
    // pregunta que no sea lo mismo que busco antes y ejecuta si es ! distinto
if(!this._historial.includes(query)){
  this._historial.unshift(query);
  this._historial = this._historial.splice(0,10);

    // guarda un historial del campo buscar... en localstorage
  localStorage.setItem('historial', JSON.stringify( this._historial ) );


}

const params = new HttpParams()
.set('api_key', this.apiKey)
.set('limit', '10')
.set('q', query)

console.log(params.toString());

// peticiones http,
// al cambiar las comillas simples '' por `` se puede agregar el campo ${query} que es el campo de busqueda

 this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
 .subscribe( ( resp ) => {
   this.resultado = resp.data;
   localStorage.setItem('resultado', JSON.stringify( this.resultado ) );
 });
    

}

}
