import { HQModel } from './../shared/model/hq.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaMarvelService } from '../shared/consulta-marvel.service';

@Component({
  selector: 'app-hq-detalhes',
  templateUrl: './hq-detalhes.component.html',
  styleUrls: ['./hq-detalhes.component.scss']
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
    this.idHeroi = this.activetedRoute.snapshot.params.id;
    this.subscriptionApi = this.consultaMarvelService.consultaHq(this.idHeroi).subscribe((dados) => {
      this.retornoApi = dados;

      this.trataRetorno();
      // this.hqMaisCara = dados.find(element => Math.max(element.prices[0]));
      this.erroApi = false;
    }, err => {
      this.erroApi = true;
    });
  }

  detalheHeroi(): void {
    this.route.navigate(['/detalhe', this.idHeroi]);
  }

  trataRetorno(): void {
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
    const valor = Math.max.apply(Math, this.hqs.map((hq) => hq.price));
    this.hqMaisCara = this.hqs.find(e => e.price = valor);
  }

}
