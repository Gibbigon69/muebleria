import { Component } from '@angular/core';
import { Marcas } from 'src/app/Models/marcas.model';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-buscar-marca',
  templateUrl: './buscar-marca.component.html',
  styleUrls: ['./buscar-marca.component.css']
})
export class BuscarMarcaComponent {
  nombreMarca: string = "";
  status: boolean = false;
  error: boolean = false;
  listaMarca: Marcas[] = [];

  constructor(private MarcasService: MarcasService){}

  ngOnInit(): void{
  }

  obtenerMarca(){
    this.MarcasService.buscarMarca(this.nombreMarca)
    .subscribe((data: any) =>{
      
      if(data.length === 2){
        this.status = false;
        this.error = true;
      }else{
        this.status = true;
        this.error = false;
        this.listaMarca = JSON.parse(data);
        
      }
    })  
  }

}
