import { HttpClient } from '@angular/common/http';
import { Call } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedores } from 'src/app/Models/proveedores.modelo';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css']
})
export class NuevoProveedorComponent {

  
  constructor(private http: HttpClient, private ProveedoresService: ProveedoresService, private router: Router){}
  
  ngOnInit():void{
    
  }
  
  objProveedor: any = {
    nombreProveedor: '',
    RFC: '',
    telefono: '',
    direccion: {
      calle: '',
      colonia: '',
      ciudad: '',
      estado: '',
      codigoPostal: '',
      pais: ''
    }
    
  }
  
  crearProveedor(){
    this.ProveedoresService.insertarProveedor(this.objProveedor)
    .subscribe((data) =>{
      alert("¡Insertado con éxito!")
      this.router.navigate(['/catalogoProveedor'])
    })
  }
}
