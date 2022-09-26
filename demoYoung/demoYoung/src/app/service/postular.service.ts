import { Postular } from "../model/postular";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class PostularService {
    url: string = "http://localhost:5000/postular"
    constructor(private http: HttpClient) { }
    listar() {
        return this.http.get<Postular[]>(this.url);
    }
}
