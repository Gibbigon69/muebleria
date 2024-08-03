import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcas } from 'src/app/Models/marcas.model';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-actualizar-marca',
  templateUrl: './actualizar-marca.component.html',
  styleUrls: ['./actualizar-marca.component.css']
})
export class ActualizarMarcaComponent {

  constructor(private marcasService: MarcasService, private router: ActivatedRoute, private ruta: Router){}
  
  productoActualizar: Marcas[] = []
  imagen1: any;
  dato: any;
  
  productoId: any | null = null;
  ngOnInit():void{
    this.productoId = this.router.snapshot.paramMap.get('id');
    if(this.productoId){
      this.marcasService.obtenerMarcaPorId(this.productoId)
      .subscribe(producto =>{
        this.dato = producto;
        console.log(producto);
      }, error =>{
        console.log("Error al obtener el producto", error)
      });
    }
  }
  convertir_B64(event: any) {
    //alert(event.target.files[0].name)
    if (event.target.files && event.target.files[0])
      {
        var file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = e => this.imagen1 = reader.result;
        reader.readAsDataURL(file);
      }
  }
  actualizar(){
    this.dato.logo = this.imagen1;
    if(this.productoId && this.dato){
      this.marcasService.actualizarMarca(this.productoId, this.dato)
      .subscribe(() =>{
        this.ruta.navigate(['/catalogoMarca'])
        alert("Actualizado con éxito!");
      }, error =>{
        console.log(error)
      })
    }else{
      console.error("Error en ID de productos o los datos")
    }
  }

}
