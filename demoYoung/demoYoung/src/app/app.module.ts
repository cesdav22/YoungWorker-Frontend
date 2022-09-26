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
    BecaDialogoComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
