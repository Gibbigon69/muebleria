import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';


@Injectable({
  providedIn: 'root'
})
export class MueblesService {

  constructor(private http:HttpClient) { }

  URL_LOCAL = "http://127.0.0.1:4000";
  BASE_URL = "https://api-muebleria.onrender.com/";
  
  obtenerProductoPorId(id: string): Observable<any>{
    const apiUrl = 'http://127.0.0.1:4000'
    const url = `${this.BASE_URL}productos/porID/${id}`
    return this.http.get<any>(url); 
  }

  obtenerProductos(): Observable<any>{
    return this.http.get<ProductosMuebles[]>('https://api-muebleria.onrender.com/productos/get_all')
  }
  buscarProducto(id: number){
    
    return this.http.get<ProductosMuebles[]>('https://api-muebleria.onrender.com/productos/porID/' + id,)
  }

  insertarProducto(miProd: ProductosMuebles): Observable<any>{ 
    
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>("https://api-muebleria.onrender.com/productos/nuevoProd", miProd)
    .pipe( tap((res:any)=>{
      if (res.message=="Documento insertado"){
      console.log("servicio",res.message)
      }
      
      }),
      catchError(err=>of(err.error.message))
      
      )
  }
  eliminarProduco(id: string){
    return this.http.delete<any>(this.URL_LOCAL + "delete/" + id)
  }

  actualizarProducto(id: string, datos: ProductosMuebles){

    const apiUrl = "https://api-muebleria.onrender.com/";
    const url= `${apiUrl}/productos/actualizar/${id}`;
    
    return this.http.put<any>(url, datos);

  }

}
