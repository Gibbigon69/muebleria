import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';
import { MueblesService } from 'src/app/services/productos/muebles.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {

  constructor(private router: ActivatedRoute, private ruta: Router, private productoServicio: MueblesService){}

productoActualizar: ProductosMuebles [] = []
  // dato: ProductosMuebles = {
  //   "_id": {
  //     "$oid" : ""
  //   },
  //   "nombre": "",
  //   "categoria":{"nombreCat":"","zona": "", "descripcionCat": ""},
  //   "marca":{"nombremarca":"","modelo":""},
  //   "costo": 0,
  //   "dimensiones":{"largo":"","alto":"", "ancho": ""},
  //   "color": [],
  //   "foto": "",
  //   "fechaAdquisicion": '',
  //   "cantidad_existente":0,
  //   "status": "",
  //   "material_de_fabricacion": [],
  //   "origen":{"pais":"","idioma":""},
  //   "marca_id": 0,
  //   "provId" : ""}

    dato: any;  

    productoId: any | null = null;

    ngOnInit():void{
      this.productoId = this.router.snapshot.paramMap.get('id');
      
      if(this.productoId){
        
        this.productoServicio.obtenerProductoPorId(this.productoId)
        .subscribe(producto =>{
          console.log(producto)
          this.productoActualizar = producto;
          this.dato = producto;
        }, error =>{
          console.log("Error al obtener el producto", error)
        });
      }
    }

    actualizar(){
      if(this.productoId && this.dato){
        console.log(this.productoId)
        console.log(this.dato)
        this.productoServicio.actualizarProducto(this.productoId, this.dato)
        .subscribe(() =>{
          this.ruta.navigate(['/catalogoProductos'])
          alert("Actualizado con éxito!")
        }, error =>{
          console.log(error)
        })
      }else{
        console.error("Error en ID de productos o los datos")
      }
    }
}
