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
  listaMarca: any;

  constructor(private MarcasService: MarcasService){}

  ngOnInit(): void{
  }

  obtenerMarca(){
    this.MarcasService.buscarMarca(this.nombreMarca)
    .subscribe((data: Object) =>{
      console.log(data);
      if(data == null){
        this.status = false;
        this.error = true;
      }else{
        this.status = true;
        this.error = false;
        this.listaMarca = data;
        console.log(this.listaMarca);

      }
    })  
  }

}
