import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private consultaMarvelService: ConsultaMarvelService,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idHeroi = this.activetedRoute.snapshot.params.id;
    this.consultaMarvelService.detalhesHeroi(this.idHeroi).subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.subscriptionApi.unsubscribe();
  }

}
