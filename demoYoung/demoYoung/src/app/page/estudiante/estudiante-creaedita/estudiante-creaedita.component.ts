import { Router, ActivatedRoute, Params } from '@angular/router';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/model/estudiante';

@Component({
  selector: 'app-estudiante-creaedita',
  templateUrl: './estudiante-creaedita.component.html',
  styleUrls: ['./estudiante-creaedita.component.css']
})
export class EstudianteCreaeditaComponent implements OnInit {
  estudiante: Estudiante = new Estudiante();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private estudianteService: EstudianteService,
    private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  aceptar(): void {
    if (this.estudiante.nameEstudiante.length > 0 && this.estudiante.carreraEstudiante.length > 0) {
      if (this.edicion) {
        this.estudianteService.modificar(this.estudiante).subscribe(data => {
          this.estudianteService.listar().subscribe(data => {
            this.estudianteService.setLista(data);
          })
        })
      } else {

        this.estudianteService.insertar(this.estudiante).subscribe(data => {
          this.estudianteService.listar().subscribe(data => {
            this.estudianteService.setLista(data);
          })
        })
      }
      this.router.navigate(['estudiantes']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }

  }

  init() {
    if (this.edicion) {
      this.estudianteService.listarId(this.id).subscribe(data => {
        this.estudiante = data;
      })
    }
  }
}

