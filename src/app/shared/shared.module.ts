import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ConsultaMarvelService } from './consulta-marvel.service';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    CardComponent
  ],
  providers: [HttpClientModule, ConsultaMarvelService]
})
export class SharedModule { }
