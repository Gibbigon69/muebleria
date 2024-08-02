import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Marcas } from 'src/app/Models/marcas.model';
import { MarcasService } from 'src/app/services/marcas/marcas.service';

@Component({
  selector: 'app-nueva-marca',
  templateUrl: './nueva-marca.component.html',
  styleUrls: ['./nueva-marca.component.css']
})
export class NuevaMarcaComponent {
//Nueva marca componente	  

textoDeInput: any;
imagen1: any;


  constructor(private http:HttpClient, private MarcasService: MarcasService, private router: Router){}
  
  ngOnInit():void{
    
  }

  objetoMarca: any = {
    "$oid": {
      "_id": ''
    },
    "nombreMarca": '',
    "logo": '',
    "RFC": '',
    "paginaWeb": ''
  }
  postMarca() {
    this.objetoMarca.logo = this.imagen1;
    this.MarcasService.insertarMarcas(this.objetoMarca)
      .subscribe(() => {
        alert("Insertado con éxito");
        this.router.navigate(['/catalogoMarca'])
      });
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
}
