import { Component, OnInit } from '@angular/core';
import { Beca } from 'src/app/model/beca';
import { BecaService } from 'src/app/service/beca.service';
import { MatDialog } from '@angular/material/dialog';
import { BecaDialogoComponent } from './beca-dialogo/beca-dialogo.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-beca-listar',
  templateUrl: './beca-listar.component.html',
  styleUrls: ['./beca-listar.component.css']
})
export class BecaListarComponent implements OnInit {
dataSource:MatTableDataSource<Beca>=new MatTableDataSource();
displayedColumms:string[]=['id','beneficio','condicion','idOferta','acciones','acciones2'];
constructor(private Bs:BecaService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
