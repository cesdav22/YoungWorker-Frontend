import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { MatTableDataSource } from '@angular/material/table'
import { Estudiante } from 'src/app/model/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EstudianteDialogoComponent } from './estudiante-dialogo/estudiante-dialogo.component';
@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})
export class EstudianteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'carrera','universidad','accion1','accion2'];
  private idMayor:number=0;
  constructor(private Es: EstudianteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.Es.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
    this.Es.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.Es.getConfirmaEliminacion().subscribe(data=>{
      data==true ? this.eliminar(this.idMayor): false;
    });
        
  }
  confirmar(id:number){
    this.idMayor=id;
    this.dialog.open(EstudianteDialogoComponent);

  }
  
  eliminar(id:number){
    this.Es.eliminar(id).subscribe(() => {
      this.Es.listar().subscribe(data => {
        this.Es.setLista(data);
      });
    });
  }

}
