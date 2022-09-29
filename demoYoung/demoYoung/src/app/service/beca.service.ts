import { Beca } from 'src/app/model/beca';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class BecaService {

    url:string = "http://localhost:5000/beca"
    private listaCambio = new Subject<Beca[]>()
    private confirmaEliminacion = new Subject<Boolean>()
    constructor(private http: HttpClient) { }
  
    listar(){
      return this.http.get<Beca[]>(this.url);
    }
    insertar(beca:Beca){
      return this.http.post(this.url,beca)
    }
    setLista(listaNueva: Beca[]){
      this.listaCambio.next(listaNueva);
    }
    getLista(){
      return this.listaCambio.asObservable();
    }
    modificar(Bc: Beca){
      return this.http.put(this.url + "/" + Bc.id, Bc);
    }
    listarId(id:number){
      return this.http.get<Beca>(`${this.url}/${id}`);
    }
  
  //Eliminar
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
  