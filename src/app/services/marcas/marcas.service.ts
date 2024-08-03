import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marcas } from '../../Models/marcas.model';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

  obtenerMarcaPorId(id: string): Observable<any>{
    {
    return this.http.get<Marcas[]>('https://api-muebleria.onrender.com/marcas/porID/' + id)
  }
  }
  obtenerMarcas(): Observable<any>{
    return this.http.get<Marcas[]>('https://api-muebleria.onrender.com/marcas/get_all')
  }
  mostrarModelos(marca: string){
    return this.http.get<Marcas[]>('http://127.0.0.1:4000/marcas/porNombre/' + marca)
  }

  buscarMarca(nombre: string){
    return this.http.get<Marcas[]>('https://api-muebleria.onrender.com/marcas/porNombre/' + nombre)
  }

  insertarMarcas(marca: Marcas) {
    return this.http.post('http://127.0.0.1:4000/marcas/anadir', marca)
      .pipe(
        catchError(error => {
          console.error('Error al insertar la marca:', error);
          // Puedes retornar un Observable con un mensaje de error o hacer otro manejo del error aquí
          return throwError('Error al insertar la marca. Por favor, inténtelo de nuevo más tarde.');
        })
      );
  }
  eliminarMarca(id: Object){
    return this.http.delete<any>('https://api-muebleria.onrender.com/marcas/eliminar/' + id)
  }
  
  actualizarMarca(id: string, dato: Marcas): Observable<any>{
    const apiUrl = "https://api-muebleria.onrender.com";
    const url= `${apiUrl}/marcas/actualizar/${id}`;
    console.log(id);
    return this.http.put<any>(url, dato);
}
}
