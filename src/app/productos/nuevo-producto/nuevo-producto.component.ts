import { Component } from '@angular/core';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';
import { MueblesService } from 'src/app/services/productos/muebles.service';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Models/marcas.model';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';
import { Proveedores } from 'src/app/Models/proveedores.modelo';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  listaProductos: ProductosMuebles[] = []
  listaMarcas: Marcas[] = []
  listaMarcasModelos: Marcas[] = []
  listaProveedores: Proveedores [] = []
  imagen1: any;
  



  productoInsertar: any = {
  "nombre": "",
  "categoria":{"nombreCat":"","zona": "", "descripcionCat": ""},
  "marca":{"nombremarca":"","modelo":""},
  "costo": null,
  "dimensiones":{"largo":"","alto":"", "ancho": ""},
  "color": [],
  "foto": "",
  "fechaAdquisicion": '',
  "cantidad_existente": null,
  "status": "",
  "material_de_fabricacion": [],
  "origen":{"pais":"","idioma":""},
  "marca_id": null,
  "provId": null}

  //Enviar los datos a la API
  enviarDatos(){ 
    
    this.productoInsertar.costo=Number(this.productoInsertar.costo)
    this.productoInsertar.foto = this.imagen1;
  console.log("Foto", this.imagen1);
      this.MueblesService.insertarProducto(this.productoInsertar)
      .subscribe((data =>{
        console.log("PRODUCTO", data)
          console.log(data);
          this.router.navigate(['catalogoProductos'])
        })
      )
  }

  constructor(private router:Router, private http:HttpClient,  private MueblesService: MueblesService, private MarcasService: MarcasService, private ProveedoresService: ProveedoresService){}
  

  handleCheckChange(event: any, value: string) {
    if (event.target.checked) {

      //Agregamos el valor al array
      this.productoInsertar.color.push(value);
    } else {
      //Eliminamos el valor que se agregó
      const index = this.productoInsertar.color.indexOf(value);
      if (index !== -1) {
        this.productoInsertar.color.splice(index, 1);
      }
    }
  }




  
  handleCheckMaterial(event: any, valor: string){
    if(event.target.checked){
      console.log("Se está insertando")
      console.log(this.productoInsertar.material_de_fabricacion);
      this.productoInsertar.material_de_fabricacion.push(valor);
    }else{
      //indexOf recorre de manera lineal el array y si encuentra
      //la ocurrencia deveuelve el índdice del mismo
      //o devuelve -1 si no la encuentra
      const indice = this.productoInsertar.material_de_fabricacion.indexOf(valor);
      if(indice !== -1){
        this.productoInsertar.material_de_fabricacion.splice(indice, 1)
    }
    }
  }


  convertir_B64(event: any) {
    //alert(event.target.files[0].name)
    if (event.target.files && event.target.files[0])
    {
    var file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imagen1 = reader.result;
    reader.readAsDataURL(file);
    
    }
    }


  ngOnInit():void{
    this.MueblesService.obtenerProductos()
    .subscribe(data =>{
      console.log(this.listaProveedores);
      this.listaProductos = data;
    });
    
    this.obtenerMarcas();
    this.obtenerProveedores();
    
  }

  obtenerProveedores(){
    this.ProveedoresService.obtenerProveedores()
    .subscribe(data =>{
      this.listaProveedores = data;
    })
  }

  //Obtiene las marcas
  obtenerMarcas(){
    this.MarcasService.obtenerMarcas()
    .subscribe(data =>{
      this.listaMarcas = data;
      });
  }

  //Actualiza los modelos según la marca seleccionada


}
