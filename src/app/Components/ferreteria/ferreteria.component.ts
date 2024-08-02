import { Component } from '@angular/core';
import { Ferreteria } from 'src/app/Models/ferreteria.modelos';
import { FerreService } from 'src/app/services/ferreteria/ferre.service';

@Component({
  selector: 'app-ferreteria',
  templateUrl: './ferreteria.component.html',
  styleUrls: ['./ferreteria.component.css']
})
export class FerreteriaComponent {
  listaFerre: Ferreteria[]=[]

  constructor(private FerreService: FerreService){}

  ngOnInit():void{
    this.FerreService.obtenerProductos()
    .subscribe(data =>{
      console.log(data);
      this.listaFerre = data;
    });
  }
}
