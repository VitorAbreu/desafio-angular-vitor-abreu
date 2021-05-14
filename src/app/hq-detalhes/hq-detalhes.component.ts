import { HQModel } from './../shared/model/hq.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaMarvelService } from '../shared/consulta-marvel.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hq-detalhes',
  templateUrl: './hq-detalhes.component.html',
  styleUrls: ['./hq-detalhes.component.scss'],
  animations: [
    trigger('hq', [
      transition(
        ':enter',
        [
          style({ opacity: 0}),
          animate('2s ease-in',
            style({ opacity: 1 }))
        ]
      )
    ])
  ]
})
export class HqDetalhesComponent implements OnInit {
  idHeroi: any;
  subscriptionApi: any;
  erroApi: boolean;
  hqMaisCara: HQModel;
  hqs: HQModel[] = [];
  retornoApi: any;

  constructor(
    private consultaMarvelService: ConsultaMarvelService,
    private activetedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    // recebe parametros da url via snapshot
    this.idHeroi = this.activetedRoute.snapshot.params.id;
    //chama a service e trás as 20 HQs
    this.subscriptionApi = this.consultaMarvelService.consultaHq(this.idHeroi).subscribe((dados) => {
      this.retornoApi = dados;

      this.trataRetorno();
      
      this.erroApi = false;
    }, err => {
      this.erroApi = true;
    });
  }

  detalheHeroi(): void {
    this.route.navigate(['/detalhe', this.idHeroi]);
  }

  trataRetorno(): void {
    //cria um array de objetos para facilitar o manuseio
    this.retornoApi.forEach((hq: any) => {
      this.hqs.push(
        new HQModel(
          hq.title, hq.prices.shift()?.price,
          hq.description?.substring(0, 330) + (hq.description?.length > 330 ? '...' : ''),
          (hq.thumbnail.path + '.' + hq.thumbnail.extension)
        )
      );
    });
    this.pegaHQMaisCara();
  }

  pegaHQMaisCara(): void {
    //filtra o maior valor entre as HQs
    const valor = Math.max.apply(Math, this.hqs.map((hq) => hq.price));
    //filtra o primeiro objeto que possui o maior valor
    this.hqMaisCara = this.hqs.find(e => e.price = valor);
  }

}
