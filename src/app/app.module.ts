import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule desde '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';

import { ProductosModule } from './productos/productos.module';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';


import {HttpClientModule} from '@angular/common/http';
import { FerreteriaComponent } from './Components/ferreteria/ferreteria.component';
import { MuebleriaComponent } from './Components/muebleria/muebleria.component';


//import { NuevaMarcaComponent } from './marcas-nuevo/nueva-marca/nueva-marca.component';
import { MarcasNuevoModule } from './marcas-nuevo/marcas-nuevo.module';

import { ProveedoresModule } from './proveedores/proveedores.module';
import { CatalogoMarcasComponent } from './marcas-nuevo/catalogo-marcas/catalogo-marcas.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { BuscarMarcaComponent } from './marcas-nuevo/buscar-marca/buscar-marca.component';
import { NuevaMarcaComponent } from './marcas-nuevo/nueva-marca/nueva-marca.component';
import { CatalogoProductosComponent } from './productos/catalogo-productos/catalogo-productos.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DocumentacionComponent } from './Components/documentacion/documentacion.component';
import { InicioComponent } from './Components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FerreteriaComponent,
    MuebleriaComponent,
    CatalogoMarcasComponent,
    CatalogoProductosComponent,
    FooterComponent,
    DocumentacionComponent,
    InicioComponent,    
    
  ],
  imports: [
    BrowserModule,
     
    AppRoutingModule,
    ProveedoresModule,
    NavigationModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
