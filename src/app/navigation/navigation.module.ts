import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent
  ]
})
export class NavigationModule { }
