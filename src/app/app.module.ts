import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import "@angular/compiler"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarHeroisComponent } from './listar-herois/listar-herois.component';
import { SharedModule } from './shared/shared.module';
import { DetalheHeroiComponent } from './detalhe-heroi/detalhe-heroi.component';
import { HqDetalhesComponent } from './hq-detalhes/hq-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarHeroisComponent,
    DetalheHeroiComponent,
    HqDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
