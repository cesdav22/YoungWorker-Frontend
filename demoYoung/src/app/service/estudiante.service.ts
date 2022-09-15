import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Estudiante } from "../model/estudiante";

@Injectable({
    providedIn: 'root'
})
export class EstudianteService {
    url: string = "http://localhost:5000/estudiante"
    constructor(private http: HttpClient) { }

    listar() {
        return this.http.get<Estudiante[]>(this.url);
    }
}