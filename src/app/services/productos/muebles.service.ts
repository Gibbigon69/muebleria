import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';


@Injectable({
  providedIn: 'root'
})
export class MueblesService {

  constructor(private http:HttpClient) { }

  obtenerProductoPorId(id: string): Observable<any>{
    const apiUrl = 'http://127.0.0.1:4000'
    const url = `http://127.0.0.1:4000/productos/porID/${id}`
    return this.http.get<any>(url); 
  }

  obtenerProductos(){
    return this.http.get<ProductosMuebles[]>('http://127.0.0.1:4000/productos/get_all')
  }
  buscarProducto(id: number){
    
    return this.http.get<ProductosMuebles[]>('http://127.0.0.1:4000/productos/porID/' + id,)
  }

  insertarProducto(miProd: ProductosMuebles): Observable<any>{ 
    
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>("http://127.0.0.1:4000/productos/nuevoProd", miProd)
    .pipe( tap((res:any)=>{
      if (res.message=="Documento insertado"){
      console.log("servicio",res.message)
      }
      
      }),
      catchError(err=>of(err.error.message))
      
      )
  }
  eliminarProduco(id: string){
    return this.http.delete<any>("http://127.0.0.1:4000/productos/eliminar/" + id)
  }

  actualizarProducto(id: string, datos: ProductosMuebles){

    const apiUrl = "http://127.0.0.1:4000";
    const url= `${apiUrl}/productos/actualizar/${id}`;
    
    return this.http.put<any>(url, datos);

  }

}
