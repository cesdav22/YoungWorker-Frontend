import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BecaComponent } from '../page/beca/beca.component'; 
import { BecaCrearComponent } from '../page/beca/beca-crear/beca-crear.component';


const routes: Routes = [  
  {
  path: 'beca', component: BecaComponent, children: [
    { path: 'edicion/:id', component: BecaCrearComponent },
    { path: 'nuevo', component: BecaCrearComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
