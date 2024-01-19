import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ClassificacaoComponent } from './componentes/classificacao/classificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BarraLateralComponent,
    DashboardComponent,
    ClassificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
