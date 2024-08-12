import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Marcas } from 'src/app/Models/marcas.model';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-catalogo-marcas',
  templateUrl: './catalogo-marcas.component.html',
  styleUrls: ['./catalogo-marcas.component.css']
})
export class CatalogoMarcasComponent {
  listaMarcas: Marcas[] = []
  isLoading: boolean = false;

  objetoMarca: any = {}

  productoId: any | null = null;
  
  constructor(private MarcasService: MarcasService, private router:Router, private route: ActivatedRoute){}

  ngOnInit():void{
    this.productoId = this.route.snapshot.paramMap.get('id');

    this.mostrarMarcas();
  }

  mostrarMarcas(){
    this.isLoading = true;
    this.MarcasService.obtenerMarcas()
    .pipe(
      catchError(error =>{
        alert("Ha ocurrido algo malo");
        return of()
      })
    )
    .subscribe((data: any) =>{
      this.listaMarcas = data;
      this.isLoading = false;
    })
  }
  actualizarMarca(id: string){
    this.router.navigate(['/actualizarMarca/' , id])
    console.log(id);
  }

  eliminarMarca(id: string){
    const resultado = window.confirm('¿Estás seguro de que deseas eliminar la marca?');
    if(resultado){
      this.MarcasService.eliminarMarca(id)
      .subscribe(() =>{
        window.location.reload();
      })
    }
  }
}
