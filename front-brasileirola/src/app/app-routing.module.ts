import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ClassificacaoComponent } from './componentes/classificacao/classificacao.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  
  {path:'dashboard', component:DashboardComponent},
  {path:'classificacao', component:ClassificacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
