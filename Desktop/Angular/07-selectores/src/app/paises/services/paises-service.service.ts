import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais, PaisesSmall } from '../interfaces/paises.interface';
import { combineLatest, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  private BaseUrl: string = 'https://restcountries.eu/rest/v2';
  private _regiones: string [] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string []{
    return [...this._regiones];
  }
  constructor(private http: HttpClient) { }

  getpaisesPorRegion(region: string): Observable<PaisesSmall[]>{

  const url: string = `${this.BaseUrl}/region/${region}?fields=alpha3Code;name`;
  return this.http.get<PaisesSmall[]>(url);
  }

  getPaisPorCodigo(codigo: string): Observable<Pais  | null>{
      if(!codigo){
        return of(null);
      }

    const url= `${this.BaseUrl}/alpha/${codigo}` 
    return this.http.get<Pais>(url);
  }

  getPaisPorCodigoSmall(codigo: string): Observable<PaisesSmall>{
  
  const url= `${this.BaseUrl}/alpha/${codigo}?fields=alpha3Code;name`;
  return this.http.get<PaisesSmall>(url);
}

getPaisesPorCodigos(borders: string[]): Observable<PaisesSmall[]>{


  if(!borders){
  return of([]);
  }
const peticiones: Observable<PaisesSmall>[] = [];
borders.forEach(codigo => {
  const peticion =  this.getPaisPorCodigoSmall(codigo);
  peticiones.push(peticion); 
});
return combineLatest(peticiones);
}

}
