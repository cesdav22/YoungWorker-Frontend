import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario} from '../model/usuario';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    private url: string = `${environment.host}/suscripcion`
    private listaCambiar = new Subject<Usuario[]>()
    private confirmarEliminar = new Subject<Boolean>()
    constructor(private http:HttpClient){}
    listar() {
        return this.http.get<Usuario[]>(this.url);
      }
      insertar(usuario: Usuario) {
        return this.http.post(this.url, usuario);
      }
      setLista(listaNueva: Usuario[]) {
        this.listaCambiar.next(listaNueva);
      }
      getLista() {
        return this.listaCambiar.asObservable();
      }
      modificar(usuario: Usuario) {
        return this.http.put(this.url, usuario);
      }
      listarId(id: number) {
        return this.http.get<Usuario>(`${this.url}/${id}`);
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