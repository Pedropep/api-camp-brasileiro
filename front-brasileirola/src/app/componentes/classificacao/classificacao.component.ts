import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
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
  clube: Clube = new Clube('',0,0,[])       

  lista_all: Brasileiro[] = []
  lista_rodada_1: Brasileiro[]
  lista_clube: Clube[] = []  

  time : string
  vitorias:number = 0
  pontos:number = 0

  cont : boolean = true;

  constructor(
    private service: BrasileiroService, 
  ){ }

  ngOnInit(): void {
    this.criaListaClube('1')
    this.getAll()
  }

  //Adiciona os nomes dos clubes da primeira rodada em uma lista de Clubes
  criaListaClube(rodada:string){
    this.service.getByRodada(rodada).subscribe((resp: Brasileiro[]) => {
      this.lista_rodada_1 = resp
        
        this.lista_rodada_1.forEach(element => {
          if (this.lista_rodada_1.length <= 10) {
             this.clube = new Clube(element.mandante, 0, 0, []) 
            this.lista_clube.push(this.clube)           
          }if(this.lista_rodada_1.length < 11){
             this.clube = new Clube(element.visitante, 0, 0, []) 
            this.lista_clube.push(this.clube)         
          }          
        });
        // console.log(this.lista_clube)                
      })  
  }
  
  getAll(){
    this.service.getAll().subscribe((resp: Brasileiro[]) => {
      this.lista_all = resp   
      this.montaPartidasClube()
    });
  }


  //ADICIONA TODAS AS PARTIDAS DE UM CLUBE NA LISTA DE CLUBES
  montaPartidasClube(){    

    this.lista_clube.forEach(times => {

      this.lista_all.forEach(jogo => {
        
        const timao = this.lista_clube.find(j => j.nome === jogo.mandante && jogo.mandante === times.nome || jogo.visitante === times.nome && j.nome === jogo.visitante );             
        
        if(timao){            
          this.partida.id = jogo.id
          this.partida.vencedor = jogo.vencedor
          this.partida.visitante = jogo.visitante
          this.partida.mandante = jogo.mandante
          this.partida.placar_mandante = jogo.placar_mandante
          this.partida.rodada = jogo.rodada
          this.partida.placar_visitante = jogo.placar_visitante
    
          this.partida = new Brasileiro()         
          
          timao.partidas.push(this.partida)          
        }       
      });
    });    
    
    console.log(this.lista_clube)    
  }
  
  calcularPontosPorRodada(rodada: number){
    
  }
}
