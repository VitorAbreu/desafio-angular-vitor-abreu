import { HeroiModel } from './../shared/model/heroi.model';
import { ConsultaMarvelService } from './../shared/consulta-marvel.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-herois',
  templateUrl: './listar-herois.component.html',
  styleUrls: ['./listar-herois.component.scss']
})
export class ListarHeroisComponent implements OnInit, OnDestroy {

  retornoApi: any[] = [];
  herois: HeroiModel[] = [];
  erro: boolean;
  subscriptionApi: Subscription;

  constructor(
    private consultaMarvelService: ConsultaMarvelService,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((parametro: any) => {
      this.herois = [];
      this.consultaHerois(parametro.id);
    });
  }

  ngOnDestroy(): void {
    this.subscriptionApi.unsubscribe();
  }

  trataRetorno(): void {
    this.retornoApi.forEach((heroi: any) => {
      this.herois.push(
        new HeroiModel(
          heroi.name,
          (heroi.thumbnail.path + '.' + heroi.thumbnail.extension),
          heroi.description, heroi.id
        )
      );
    });
    console.log(this.herois);
  }

  consultaHerois(pagina?: number): void {
    this.subscriptionApi = this.consultaMarvelService.consultaHerois(pagina).subscribe(herois => {
      this.retornoApi = herois;
      this.trataRetorno();
      this.erro = false;
    }, err => {
      this.erro = true;
    });
  }
}
