import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ferreteria } from '../../Models/ferreteria.modelos';

@Injectable({
  providedIn: 'root'
})
export class FerreService {

  constructor(private http: HttpClient) { }
  obtenerProductos(){
    return this.http.get<Ferreteria[]>('https://run.mocky.io/v3/29e020fe-b583-4609-a8c6-6a183620b196')
  }
}
