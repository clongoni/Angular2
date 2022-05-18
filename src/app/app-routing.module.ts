import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoIndexComponent } from './cuerpo-index/cuerpo-index.component'
import { NosotrosComponent } from './nosotros/nosotros.component'


const routes: Routes = [
   {path: '', component: CuerpoIndexComponent,},
   {path: 'nosotros', component: NosotrosComponent,},
//    {path: 'servicios', component: NosotrosComponent,},
//    {path: 'contacto', component: NosotrosComponent,},
   ];

@NgModule({
  imports: [
     RouterModule.forRoot(routes)
     ],
     exports: [
     RouterModule
     ],
     declarations: []
     })
export class AppRoutingModule { }
