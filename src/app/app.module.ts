import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarHeroisComponent } from './listar-herois/listar-herois.component';
import { SharedModule } from './shared/shared.module';
import { DetalheHeroiComponent } from './detalhe-heroi/detalhe-heroi.component';
import { HqDetalhesComponent } from './hq-detalhes/hq-detalhes.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListarHeroisComponent,
    DetalheHeroiComponent,
    HqDetalhesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
