import { Component } from '@angular/core';
import { Proveedores } from 'src/app/Models/proveedores.modelo';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-buscar-proveedor',
  templateUrl: './buscar-proveedor.component.html',
  styleUrls: ['./buscar-proveedor.component.css']
})
export class BuscarProveedorComponent {
  nombreProveedor: string = "";
  statusConsulta: boolean = false;
  listaProveedor: Proveedores[] = [];
  error: boolean = false;
  constructor(private ProveedoresService: ProveedoresService){}

  ngOnInit(): void{

  }
  buscarProveedor(nombre: string){
    
    this.ProveedoresService.buscarProveedorNombre(nombre)
    .subscribe((data : any) =>{
      this.listaProveedor = data;
      console.log(data.length);
      if(data.length === 0){
        this.error = true
        this.statusConsulta = false;
      }else{
        this.error = false
        this.statusConsulta = true;
      }
    })
  }

  mostrarTabla(nombre: string){
    this.ProveedoresService.buscarProveedorNombre(nombre)
    .subscribe((data: any) =>{
      this.listaProveedor = JSON.parse(data);
      
    })
  }
}
