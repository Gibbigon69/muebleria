import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProductosComponent } from './productos/catalogo-productos/catalogo-productos.component';
import { BusquedaProductosComponent } from './productos/busqueda-productos/busqueda-productos.component';
import { NuevoProductoComponent } from './productos/nuevo-producto/nuevo-producto.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { CatalogoProveedoresComponent } from './proveedores/catalogo-proveedores/catalogo-proveedores.component';
import { BuscarProveedorComponent } from './proveedores/buscar-proveedor/buscar-proveedor.component';
import { NuevaMarcaComponent } from './marcas-nuevo/nueva-marca/nueva-marca.component';
import { CatalogoMarcasComponent } from './marcas-nuevo/catalogo-marcas/catalogo-marcas.component';
import { BuscarMarcaComponent } from './marcas-nuevo/buscar-marca/buscar-marca.component';
import { ActualizarProductoComponent } from './productos/actualizar-producto/actualizar-producto.component';
import { ActualizarProveedorComponent } from './proveedores/actualizar-proveedor/actualizar-proveedor.component';
import { ActualizarMarcaComponent } from './marcas-nuevo/actualizar-marca/actualizar-marca.component';
import { DocumentacionComponent } from './Components/documentacion/documentacion.component';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'catalogoProductos',
    component: CatalogoProductosComponent
  },
  {
    path: 'busquedaProducto',
    component: BusquedaProductosComponent
  },
  {
    path: 'nuevoProducto',
    component: NuevoProductoComponent
  },
  //Rutas para proveedor
  {
    path: 'nuevoProveedor',
    component: NuevoProveedorComponent
  },
  {
    path: 'catalogoProveedor',
    component: CatalogoProveedoresComponent
  },
  {
    path: 'busquedaProveedor',
    component: BuscarProveedorComponent
  },
  {
    path: 'nuevaMarca',
    component: NuevaMarcaComponent
  },
  {
    path: 'catalogoMarca',
    component: CatalogoMarcasComponent
  },
  {
    path: 'buscarMarca',
    component: BuscarMarcaComponent
  },
  {
    path: 'actualizarProducto/:id',
    component: ActualizarProductoComponent
  },
  {
    path: 'actualizarProveedor/:id',
    component: ActualizarProveedorComponent
  },
  {
    path: 'actualizarMarca/:id',
    component: ActualizarMarcaComponent
  },
  {
    path: 'documentacion',
    component: DocumentacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
