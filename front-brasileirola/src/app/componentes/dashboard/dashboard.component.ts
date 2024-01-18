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
  
  brasileiro: Brasileiro = new Brasileiro()
  lista_rodadas: Brasileiro[];

  constructor(
    private service: BrasileiroService, 
    private router: Router
  ){ }
  
  ngOnInit(): void {
    this.getByRodada('38')
  }

  getByRodada(rodada:string) {
    this.service.getByRodada(rodada).subscribe((resp: Brasileiro[])=>{
      this.lista_rodadas = resp
    })
  }


}
