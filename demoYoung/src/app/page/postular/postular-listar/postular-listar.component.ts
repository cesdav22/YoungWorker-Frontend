import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/model/estudiante';
import { Postular } from 'src/app/model/postular';
import { PostularService } from 'src/app/service/postular.service';

@Component({
  selector: 'app-postular-listar',
  templateUrl: './postular-listar.component.html',
  styleUrls: ['./postular-listar.component.css']
})
export class PostularListarComponent implements OnInit {
  dataSource: MatTableDataSource<Postular> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'grado', 'infoCV', 'habilidad'];
  constructor(private Ps: PostularService) { }

  ngOnInit(): void {
    this.Ps.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    })
  }

}
