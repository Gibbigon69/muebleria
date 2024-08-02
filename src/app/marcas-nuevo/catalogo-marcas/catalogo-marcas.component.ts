import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marcas } from 'src/app/Models/marcas.model';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-catalogo-marcas',
  templateUrl: './catalogo-marcas.component.html',
  styleUrls: ['./catalogo-marcas.component.css']
})
export class CatalogoMarcasComponent {
  listaMarcas: Marcas[] = []

  objetoMarca: Marcas ={
    "_id": {
      "$oid": ""
  },
  "nombreMarca": "",
  "logo": "",
  "RFC": "",
  "paginaWeb": ""
  }

  productoId: any | null = null;
  
  constructor(private MarcasService: MarcasService, private router:Router, private route: ActivatedRoute){}

  ngOnInit():void{
    this.productoId = this.route.snapshot.paramMap.get('id');

    this.mostrarMarcas();
  }

  mostrarMarcas(){
    this.MarcasService.obtenerMarcas()
    .subscribe((data: any) =>{
      this.listaMarcas = data;
    })
  }
  actualizarMarca(id: string){
    this.router.navigate(['/actualizarMarca/' , id])
    console.log(id);
  }

  eliminarMarca(id: string){
    alert(id)
    const resultado = window.confirm('¿Estás seguro de que deseas eliminar la marca?');
    if(resultado){
      this.MarcasService.eliminarMarca(id)
      .subscribe((data) =>{
        console.log(data);
        //window.location.reload();
      })
      //console.log(id);
    }
  }
}
