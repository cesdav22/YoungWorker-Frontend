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

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    PostularComponent,
    PostularListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
