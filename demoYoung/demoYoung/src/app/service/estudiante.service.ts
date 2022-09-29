import { Estudiante } from 'src/app/model/estudiante';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EstudianteService {
    url: string = "http://localhost:5000/estudiantes"
    private listaCambio = new Subject<Estudiante[]>()
    private confirmaEliminacion= new Subject<Boolean>()
    constructor(private http: HttpClient) { }

    listar() {
        return this.http.get<Estudiante[]>(this.url);
    }
    insertar(estudiante: Estudiante) {
        return this.http.post(this.url, estudiante);
    }
    setLista(listaNueva: Estudiante[]) {
        this.listaCambio.next(listaNueva);
    }
    getLista() {
        return this.listaCambio.asObservable();
    }
    modificar(estudiante: Estudiante) {
        return this.http.put(this.url + "/" + estudiante.id, estudiante);
    }
    listarId(id: number) {
        return this.http.get<Estudiante>(`${this.url}/${id}`);
    }
    eliminar(id: number) {
        return this.http.delete(this.url + "/" + id);

    }
    getConfirmaEliminacion(){
    return this.confirmaEliminacion.asObservable();
    }
    setConfirmaEliminacion(estado:boolean){
        this.confirmaEliminacion.next(estado);

    }

}