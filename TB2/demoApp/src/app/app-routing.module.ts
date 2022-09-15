import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecaComponent } from './page/beca/beca.component';

const routes: Routes = [{

  path:'beca', component:BecaComponent,children:[]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
