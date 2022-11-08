import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleo } from '../model/empleo';
import { Subject , EMPTY} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleoService {
  url: string = "http://localhost:8083/ofertaEmpleo"
  private listaCambio = new Subject<Empleo[]>()
  private confirmaEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }
  
  listar() {
    return this.http.get<Empleo[]>(this.url);
  }
  insertar(empleo: Empleo) {
    return this.http.post(this.url, empleo);
  }
  setLista(listaNueva: Empleo[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  modificar(empleo: Empleo) {
    return this.http.put(this.url + "/" + empleo.id, empleo);
  }
  listarId(id: number) {
    return this.http.get<Empleo>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmaEliminacion.asObservable();
  }
  setConfirmaEliminacion(estado: Boolean) {
    this.confirmaEliminacion.next(estado);
  }
  

}
