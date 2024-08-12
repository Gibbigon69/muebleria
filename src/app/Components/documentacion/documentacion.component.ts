import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent {
  jsonString: string = JSON.stringify(
    {productos: "https://api-muebleria.onrender.com/productos/get_all", marcas: "https://api-muebleria.onrender.com/marcas/get_all", proveedores: "https://api-muebleria.onrender.com/proveedores/get_all"}, null, 3);
}
