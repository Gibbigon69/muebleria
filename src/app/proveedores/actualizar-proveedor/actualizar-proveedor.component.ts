import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedores } from 'src/app/Models/proveedores.modelo';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent {
  constructor(private router: ActivatedRoute, private ruta: Router, private proveedorService: ProveedoresService){}

productoActualizar: Proveedores [] = []
  dato: Proveedores = {
    "_id": {
      "$oid" : ""
    },
    "nombreProveedor": "",
    "RFC": "",
    "telefono": "",
    "direccion":{"calle":"","colonia": "", "ciudad": "", "estado": "", "codigoPostal": "", "pais": ""},
    }

    productoId: any | null = null;

    ngOnInit():void{
      this.productoId = this.router.snapshot.paramMap.get('id');
      if(this.productoId){
        
        this.proveedorService.obtenerProveedorPorId(this.productoId)
        .subscribe(producto =>{
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
        this.proveedorService.actualizarProveedor(this.productoId, this.dato)
        .subscribe(() =>{
          this.ruta.navigate(['/catalogoProveedor'])
          alert("Actualizado con éxito!")
        }, error =>{
          console.log(error)
        })
      }else{
        console.error("Error en ID de productos o los datos")
      }
    }
}
