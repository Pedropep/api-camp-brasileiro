import { Component, OnInit } from '@angular/core';
import { Brasileiro } from 'src/app/model/Brasileiro';
import { Clube } from 'src/app/model/Clube';
import { BrasileiroService } from 'src/app/service/brasileiro.service';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit{  
  
  partida: Brasileiro = new Brasileiro()
  clube: Clube = new Clube()

  lista_all: Brasileiro[]
  lista_clube: Clube[] = []

  time : string
  vitorias:number = 0
  pontos:number = 0

  cont : boolean = true;

  constructor(
    private service: BrasileiroService, 
  ){ }

  ngOnInit(): void {
    this.getAll()
    // console.log(this.lista_clube)
  }

  getAll(){
    this.service.getAll().subscribe((resp: Brasileiro[]) => {
      this.lista_all = resp

      this.lista_all.forEach(element => {
        this.clube.nome = element.vencedor        
        console.log(this.clube)
        this.lista_clube.push(this.clube)
      });
    });
  }
      
}
