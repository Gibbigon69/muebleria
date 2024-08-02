import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatsDogs } from '../Models/catdDogs.modelo';

@Injectable({
  providedIn: 'root'
})
export class CatsDogsService {

  constructor(private http:HttpClient) { }

  obtenerCat_and_Dog(){
    return this.http.get<CatsDogs[]>('https://api.thecatapi.com/v1/images/search')
  }
  morty(){
    return this.http.get<CatsDogs[]>('https://rickandmortyapi.com/api/character/')
  }
}
