import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BusquedaProductosComponent } from './busqueda-productos/busqueda-productos.component';
import { FormsModule } from '@angular/forms';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BusquedaProductosComponent,
    NuevoProductoComponent,
    ActualizarProductoComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[  
  ]
})
export class ProductosModule { }
