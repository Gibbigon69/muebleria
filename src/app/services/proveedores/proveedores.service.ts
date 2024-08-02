import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, throwError } from 'rxjs';
import { Proveedores } from 'src/app/Models/proveedores.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http: HttpClient) { }

  obtenerProveedorPorId(id: string): Observable<any>{
    const apiUrl = 'http://127.0.0.1:4000'
    const url = `http://127.0.0.1:4000/proveedores/porID/${id}`
    return this.http.get<any>(url); 
  }


  obtenerProveedores(){
    return this.http.get<Proveedores[]>('http://127.0.0.1:4000/proveedores/get_all')
  }
  buscarProveedorNombre(nombre: string){
    return this.http.get<Proveedores[]>('http://127.0.0.1:4000/proveedores/porNombre/' + nombre)
  }
  insertarProveedor(nuevoProveedor: any) {
    return this.http.post<any>('http://127.0.0.1:4000/proveedores/nuevoProv', nuevoProveedor)
      .pipe(
        catchError(this.handleError)
      );
  }
  actualizarProveedor(id: string, datos: Proveedores) {
    // Hacer la solicitud PUT al servidor
    return this.http.put<any>('http://127.0.0.1:4000/proveedores/actualizar/' + id, datos);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('An error occurred:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Devolver un observable con un mensaje de error legible para el usuario
    return throwError('Something bad happened; please try again later.');
  }
  eliminarProveedor(id: string){
    return this.http.delete<any>('http://127.0.0.1:4000/proveedores/eliminar/' + id)
  }
}

