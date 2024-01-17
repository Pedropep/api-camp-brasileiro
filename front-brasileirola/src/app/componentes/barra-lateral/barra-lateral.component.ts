import { Component } from '@angular/core';
import { FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { faCoffee, faFutbol, faChartPie, faChessRook} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',  
  styleUrls: ['./barra-lateral.component.css']  
})
export class BarraLateralComponent {
  constructor(library:FaIconLibrary){
    library.addIcons(
      faCoffee,
      faFutbol,
      faChartPie,
      faChessRook
      );
  }
}
