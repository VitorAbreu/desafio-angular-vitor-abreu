import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarHeroisComponent } from './listar-herois/listar-herois.component';

const routes: Routes = [
  { path: '',   redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListarHeroisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
