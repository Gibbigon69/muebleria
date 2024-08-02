import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoProveedoresComponent } from './catalogo-proveedores/catalogo-proveedores.component';
import { NuevoProveedorComponent } from './nuevo-proveedor/nuevo-proveedor.component';
import { BuscarProveedorComponent } from './buscar-proveedor/buscar-proveedor.component';
import { FormsModule } from '@angular/forms';
import { ActualizarProveedorComponent } from './actualizar-proveedor/actualizar-proveedor.component'; // Importa FormsModule desde '@angular/forms'


@NgModule({
  declarations: [
    CatalogoProveedoresComponent,
    NuevoProveedorComponent,
    BuscarProveedorComponent,
    ActualizarProveedorComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CatalogoProveedoresComponent,
    NuevoProveedorComponent
  ]
})
export class ProveedoresModule { }
