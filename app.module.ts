import { Estudiante } from 'src/app/model/estudiante';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './page/estudiante/estudiante.component';
import { EstudianteListarComponent } from './page/estudiante/estudiante-listar/estudiante-listar.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { PostularComponent } from './page/postular/postular.component';
import { PostularListarComponent } from './page/postular/postular-listar/postular-listar.component';
import { EstudianteCreaeditaComponent } from './page/estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { EstudianteDialogoComponent } from './page/estudiante/estudiante-listar/estudiante-dialogo/estudiante-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BecaComponent } from './page/beca/beca.component';
import { BecaCrearComponent } from './page/beca/beca-crear/beca-crear.component';
import { BecaListarComponent } from './page/beca/beca-listar/beca-listar.component';
import { BecaDialogoComponent } from './page/beca/beca-listar/beca-dialogo/beca-dialogo.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EncargadoComponent } from './page/encargado/encargado.component';
import { EncargadoListarComponent } from './page/encargado/encargado-listar/encargado-listar.component';

import { SubcripcionComponent } from './page/subcripcion/subcripcion.component';
import { PlanComponent } from './page/plan/plan.component';
import {MatMenuModule} from '@angular/material/menu';
import { SubcripcionListarComponent } from './page/subcripcion/subcripcion-listar/subcripcion-listar.component';
import { SubcripcionCreaeditaComponent } from './page/subcripcion/subcripcion-creaedita/subcripcion-creaedita.component';
import { SubcripcionDialogoComponent } from './page/subcripcion/subcripcion-listar/subcripcion-dialogo/subcripcion-dialogo.component';
import { EmpleoComponent } from './page/empleo/empleo.component';
import { EmpleoCreaeditaComponent } from './page/empleo/empleo-creaedita/empleo-creaedita.component';
import { EmpleoListarComponent } from './page/empleo/empleo-listar/empleo-listar.component';
import { EmpleoDialogoComponent } from './page/empleo/empleo-listar/empleo-dialogo/empleo-dialogo.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    PostularComponent,
    PostularListarComponent,
    EstudianteCreaeditaComponent,
    EstudianteDialogoComponent,
    BecaComponent,
    BecaCrearComponent,
    BecaListarComponent,
    BecaDialogoComponent,
    MenuComponent,

    EncargadoComponent,
    EncargadoListarComponent,

    SubcripcionComponent,
    PlanComponent,
    SubcripcionListarComponent,
    SubcripcionCreaeditaComponent,
    SubcripcionDialogoComponent,
    EmpleoComponent,
    EmpleoCreaeditaComponent,
    EmpleoListarComponent,
    EmpleoDialogoComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
