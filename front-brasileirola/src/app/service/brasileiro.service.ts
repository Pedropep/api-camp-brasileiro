import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brasileiro } from '../model/Brasileiro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrasileiroService {
  constructor( private http: HttpClient) { }
  
  getAll():Observable<Brasileiro[]>{
    return this.http.get<Brasileiro[]>('http://localhost:8080/partidas')
  }

  getByRodada(rodada: string): Observable<Brasileiro[]>{
    return this.http.get<Brasileiro[]>(`http://localhost:8080/partidas/rodada/${rodada}`)
  }

  getByIdPartida(id:number): Observable<Brasileiro>{
    return this.http.get<Brasileiro>(`http://localhost:8080/partidas/${id}`)
  }
}
