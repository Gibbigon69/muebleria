import { Component } from '@angular/core';
import { ProductosMuebles } from 'src/app/Models/muebleria.modelo';
import { MueblesService } from 'src/app/services/productos/muebles.service';

@Component({
  selector: 'app-muebleria',
  templateUrl: './muebleria.component.html',
  styleUrls: ['./muebleria.component.css']
})
export class MuebleriaComponent {
  listaProductos: ProductosMuebles[]=[]

  constructor(private MueblesService: MueblesService){}

  ngOnInit():void{
    this.MueblesService.obtenerProductos()
    .subscribe(data =>{
      console.log(data);
      this.listaProductos = data;
    });
  }
}
