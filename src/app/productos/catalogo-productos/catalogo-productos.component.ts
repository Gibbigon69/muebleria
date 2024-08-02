import { Component } from '@angular/core';
import { MueblesService } from 'src/app/services/productos/muebles.service';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent {
  listaProductos: any[]=[]

  constructor(private MueblesService: MueblesService, private route: Router){}

  ngOnInit():void{
    this.MueblesService.obtenerProductos()
    .subscribe(data =>{
      this.listaProductos = data;
    });
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
