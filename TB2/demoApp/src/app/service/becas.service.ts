import { InfoBecas } from '../model/infoBecas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BecasService {
  url:string = "http://localthost:5000/becas"
  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<InfoBecas[]>(this.url)
  }
}
