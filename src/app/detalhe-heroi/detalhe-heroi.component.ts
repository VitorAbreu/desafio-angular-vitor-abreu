import { HeroiModel } from './../shared/model/heroi.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsultaMarvelService } from '../shared/consulta-marvel.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-detalhe-heroi',
  templateUrl: './detalhe-heroi.component.html',
  styleUrls: ['./detalhe-heroi.component.scss'],
  animations: [
    trigger('heroi', [
      transition(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('2s ease-in',
            style({ opacity: 1 }))
        ]
      )
    ]),
    trigger('detalhes', [
      // transition('carregando => carregado', animate('2s ease-in'))
      transition(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('2s ease-in',
            style({ opacity: 1 }))
        ]
      )
    ])
  ]
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
    // recebe parametros da url
    this.idHeroi = this.activetedRoute.snapshot.params.id;
    //chama a service e trás o heroi
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
    //encerra o subscribe para evitar consumo de cache
    this.subscriptionApi.unsubscribe();
  }

  conferirHQ(): void {
    //redireciona para proxima tela enviando o id
    this.route.navigate(['/hqValiosa', this.idHeroi]);
  }
}
