import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faChartPie, faChessRook, faCoffee, faFutbol } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  constructor(library:FaIconLibrary){
    library.addIcons(
      faCoffee,
      faFutbol,
      faChartPie,
      faChessRook
      );
  }
}
