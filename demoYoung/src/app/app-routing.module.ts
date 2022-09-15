import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './page/estudiante/estudiante.component';
import { PostularComponent } from './page/postular/postular.component';
const routes: Routes = [{
  path:'estudiante',component:EstudianteComponent,children:[

  ]

},{
  path:'postular',component:PostularComponent,children:[
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
