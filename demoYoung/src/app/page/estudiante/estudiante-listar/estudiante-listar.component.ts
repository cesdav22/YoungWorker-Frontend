import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { MatTableDataSource } from '@angular/material/table'
import { Estudiante } from 'src/app/model/estudiante';

@Component({
  selector: 'app-estudiante-listar',
  templateUrl: './estudiante-listar.component.html',
  styleUrls: ['./estudiante-listar.component.css']
})
export class EstudianteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Estudiante> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'carrera', 'universidad'];
  constructor(private Es: EstudianteService) { }

  ngOnInit(): void {
    this.Es.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })

  }

}
