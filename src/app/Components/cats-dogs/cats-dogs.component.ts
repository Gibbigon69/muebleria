import { Component } from '@angular/core';
import { CatsDogsService } from 'src/app/services/cats-dogs.service';
import { CatsDogs } from 'src/app/Models/catdDogs.modelo';

@Component({
  selector: 'app-cats-dogs',
  templateUrl: './cats-dogs.component.html',
  styleUrls: ['./cats-dogs.component.css']
})
export class CatsDogsComponent{
  listaCatsDogs: CatsDogs [] = []
  lista: CatsDogs [] = []
  
  constructor(private CatsDogsService: CatsDogsService){}

  ngOnInit(): void {

  }
  
}