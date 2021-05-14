import { HeroiModel } from './../shared/model/heroi.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsultaMarvelService } from '../shared/consulta-marvel.service';

@Component({
  selector: 'app-detalhe-heroi',
  templateUrl: './detalhe-heroi.component.html',
  styleUrls: ['./detalhe-heroi.component.scss']
})
export class DetalheHeroiComponent implements OnInit, OnDestroy {

  subscriptionApi: Subscription;
  idHeroi: number;
  heroi: HeroiModel;
  erroApi: boolean;

  constructor(
    private consultaMarvelService: ConsultaMarvelService,
    private activetedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.idHeroi = this.activetedRoute.snapshot.params.id;
    this.subscriptionApi = this.consultaMarvelService.detalhesHeroi(this.idHeroi).subscribe(heroi => {
      this.heroi = new HeroiModel(
        heroi[0].name,
        (heroi[0].thumbnail.path + '.' + heroi[0].thumbnail.extension),
        heroi[0].description?.substring(0, 330) + (heroi[0].description?.length > 330 ? '...' : ''),
        heroi[0].id
      );
      this.erroApi = false;
    }, err => {
      this.erroApi = true;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionApi.unsubscribe();
  }

  conferirHQ(): void {
    this.route.navigate(['/hqValiosa', this.idHeroi]);
  }
}
