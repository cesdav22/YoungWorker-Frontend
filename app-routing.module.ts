import { NgModule, Component } from '@angular/core';
import { EstudianteCreaeditaComponent } from './page/estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './page/estudiante/estudiante.component';
import { PostularComponent } from './page/postular/postular.component';
import { BecaComponent } from './page/beca/beca.component';
import { BecaCrearComponent } from './page/beca/beca-crear/beca-crear.component';
import { SubcripcionCreaeditaComponent } from './page/subcripcion/subcripcion-creaedita/subcripcion-creaedita.component';
import { SubcripcionComponent } from './page/subcripcion/subcripcion.component';
import { EmpleoCreaeditaComponent } from './page/empleo/empleo-creaedita/empleo-creaedita.component';
import { EmpleoComponent } from './page/empleo/empleo.component';
const routes: Routes = [{
  path:'estudiantes',component:EstudianteComponent,children:[
    { path: 'nuevo', component:EstudianteCreaeditaComponent },
    {path: 'edicion/:id',component:EstudianteCreaeditaComponent}
  ]

},{
  path:'postular',component:PostularComponent,children:[
    
  ]
},{
  path: 'beca', component: BecaComponent, children: [
    { path: 'edicion/:id', component: BecaCrearComponent },
    { path: 'nuevo', component: BecaCrearComponent}
  ]
},{
  path: 'suscripcion', component: SubcripcionComponent, children: [
    { path: 'nuevo', component: SubcripcionCreaeditaComponent },
    { path: 'edicion/:id', component: SubcripcionCreaeditaComponent }
  ]
},{
  path: 'empleo', component: EmpleoComponent, children: [
    { path: 'nuevo', component: EmpleoCreaeditaComponent },
    { path: 'edicion/:id', component: EmpleoCreaeditaComponent }
  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
