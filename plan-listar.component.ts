import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Plan } from 'src/app/model/plan';
import { PlanService } from 'src/app/service/plan.service';
import { PlanDialogoComponent } from './plan-dialogo/plan-dialogo.component';

@Component({
  selector: 'app-plan-listar',
  templateUrl: './plan-listar.component.html',
  styleUrls: ['./plan-listar.component.css']
})
export class PlanListarComponent implements OnInit {
  lista: Plan[] = [];
  dataSource: MatTableDataSource<Plan> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'planes', 'descripcion','beneficio', 'acciones'];
  private idMayor: number = 0;
  constructor(private PlanService:PlanService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.PlanService.listar().subscribe(data => {
      this.lista = data;
      this.dataSource = new MatTableDataSource(data);

    });
    this.PlanService.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.PlanService.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(PlanDialogoComponent);
  }
  eliminar(id: number) {
    this.PlanService.eliminar(id).subscribe(() => {
      this.PlanService.listar().subscribe(data => {
        this.PlanService.setLista(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
