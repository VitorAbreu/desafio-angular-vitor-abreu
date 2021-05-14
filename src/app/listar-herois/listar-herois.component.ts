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
  subscriptionRoute: Subscription;
  id: number;
  anterior: number;
  proximo: number;

  constructor(
    private consultaMarvelService: ConsultaMarvelService,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscriptionRoute = this.activetedRoute.params.subscribe((parametro: any) => {
      this.id = parametro.id;
      this.herois = [];
      this.consultaHerois(this.id);
      let aux = Number(this.id);
      this.anterior = (aux - 1);
      aux = Number(this.id);
      this.proximo = (1 + aux);
    });
  }

  ngOnDestroy(): void {
    this.subscriptionApi.unsubscribe();
    this.subscriptionRoute.unsubscribe();
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
