import { Component, OnInit } from '@angular/core';
import { BecasService } from 'src/app/service/becas.service';
import { MatTableDataSource } from '@angular/material/table'
import { InfoBecas } from 'src/app/model/infoBecas';


@Component({
  selector: 'app-beca-listar',
  templateUrl: './beca-listar.component.html',
  styleUrls: ['./beca-listar.component.css']
})
export class BecaListarComponent implements OnInit {

  dataSource: MatTableDataSource<InfoBecas> = new MatTableDataSource();
  dispayColumns: string[] = ['idInforBeca','BenefiBeca','CondicioBeca'];

  constructor(private bS:BecasService) { }

  ngOnInit(): void {
    this.bS.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);

    })
  }
}
