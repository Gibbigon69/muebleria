import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActualizarMarcaComponent } from './actualizar-marca/actualizar-marca.component';
import { BuscarMarcaComponent } from './buscar-marca/buscar-marca.component';
import { FormsModule } from '@angular/forms';
import { NuevaMarcaComponent } from './nueva-marca/nueva-marca.component';
import { CatalogoMarcasComponent } from './catalogo-marcas/catalogo-marcas.component';


@NgModule({
  declarations: [
    BuscarMarcaComponent,
    NuevaMarcaComponent,
    ActualizarMarcaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  
  ],
  exports:[
    
  ]
})
export class MarcasNuevoModule { }
