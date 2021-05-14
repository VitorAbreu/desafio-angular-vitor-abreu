import { HqDetalhesComponent } from './hq-detalhes/hq-detalhes.component';
import { DetalheHeroiComponent } from './detalhe-heroi/detalhe-heroi.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarHeroisComponent } from './listar-herois/listar-herois.component';

const routes: Routes = [
  { path: '',   redirectTo: '/lista/0', pathMatch: 'full' },
  { path: 'lista',   redirectTo: '/lista/0', pathMatch: 'full' },
  { path: 'detalhe',   redirectTo: '/lista/0', pathMatch: 'full' },
  { path: 'lista/:id', component: ListarHeroisComponent },
  { path: 'detalhe/:id', component: DetalheHeroiComponent },
  { path: 'hqValiosa/:id', component: HqDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
