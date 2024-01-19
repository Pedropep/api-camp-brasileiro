import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brasileiro } from 'src/app/model/Brasileiro';
import { BrasileiroService } from 'src/app/service/brasileiro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  partida : Brasileiro = new Brasileiro()
  lista_all: Brasileiro[]
  lista_rodadas: Brasileiro[]
  num_rodada: string
  id_partida: number

  constructor(
    private service: BrasileiroService, 
    private router: Router    
  ){ }
  
  ngOnInit(): void {
    if(this.num_rodada == null){
      this.getByRodada('38')
    }    
    this.getAll()    
  }

  getAll(){
    this.service.getAll().subscribe((resp: Brasileiro[]) => {
      this.lista_all = resp
    })
  }

  getByRodada(rodada: string) {
    this.service.getByRodada(rodada).subscribe((resp: Brasileiro[])=>{
      this.lista_rodadas = resp
    })
  }

  findByIdPartida(id:number){    
    this.service.getByIdPartida(id).subscribe((resp: Brasileiro)=>{
      this.partida = resp      
    })
  }

}
