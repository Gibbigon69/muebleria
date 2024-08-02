import { Component } from '@angular/core';
import { MueblesService } from 'src/app/services/productos/muebles.service';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';


@Component({
  selector: 'app-busqueda-productos',
  templateUrl: './busqueda-productos.component.html',
  styleUrls: ['./busqueda-productos.component.css']
})
export class BusquedaProductosComponent {
  idProducto: any = null;
  error: boolean = false;
  sinError: boolean = false;
  objeto: ProductosMuebles [] = []
  
  

  constructor(public MueblesService: MueblesService){
    this.buscarProducto();
  }


  buscarProducto(){
    this.MueblesService.buscarProducto(this.idProducto)
    .subscribe((data: any) =>{
      
      
      
      if(data.length === 2){
        console.log("entró");
        this.sinError = false,
        this.error = true;
      }else{
        console.log(data);
        this.sinError = true;
        this.error= false;
        //Se parsea
        data = JSON.parse(data);
        this.objeto = data;
      }
    })
  }
}
