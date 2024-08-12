import { Component } from '@angular/core';
import { MueblesService } from 'src/app/services/productos/muebles.service';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent {
  listaProductos: ProductosMuebles[]=[]
  isLoading = true;
  mostrarMensaje = false;

  constructor(private MueblesService: MueblesService, private route: Router){}

  ngOnInit():void{
    this.obtenerTodosLosProductos();
  }

  obtenerTodosLosProductos(){
    this.MueblesService.obtenerProductos()
    .pipe(
      catchError(error =>{
        this.isLoading = true;
        this.mostrarMensaje = true;
        return of();
      })
    )
    .subscribe(data =>{
      this.listaProductos = data;
      this.isLoading = false;
    })
  }

  eliminarProducto(id: string){
    const resultado = window.confirm('¿Estás seguro de que deseas eliminar el producto?');
    if (resultado) {
      this.MueblesService.eliminarProduco(id)
      .subscribe((data) =>{
        console.log(data);
      })
      window.location.reload();
    } else {
      
    }
  }
    actualizarProducto(id: string){
      alert(id);
      this.route.navigate(['/actualizarProducto', id])
    }
}
