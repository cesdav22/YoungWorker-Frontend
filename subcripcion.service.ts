import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suscripcion } from '../model/suscripcion';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcripcionService {
  url: string = "http://localhost:8083/suscripcion"
  private listaCambiar = new Subject<Suscripcion[]>()
  private confirmarEliminar = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  listar() {
    return this.http.get<Suscripcion[]>(this.url);
  }
  insertar(suscrito: Suscripcion) {
    return this.http.post(this.url, suscrito);
  }
  setLista(listaNueva: Suscripcion[]) {
    this.listaCambiar.next(listaNueva);
  }
  getLista() {
    return this.listaCambiar.asObservable();
  }
  modificar(suscrito: Suscripcion) {
    return this.http.put(this.url + "/" + suscrito.id, suscrito);
  }
  listarId(id: number) {
    return this.http.get<Suscripcion>(`${this.url}/${id}`);
  }
  eliminar(id: number) {
    return this.http.delete(this.url + "/" + id);
  }
  getConfirmaEliminacion() {
    return this.confirmarEliminar.asObservable();
  }
  setConfirmaEliminacion(mood: Boolean) {
    this.confirmarEliminar.next(mood);
  }

}
