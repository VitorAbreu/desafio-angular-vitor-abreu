import { HeroiModel } from './../shared/model/heroi.model';
import { ConsultaMarvelService } from './../shared/consulta-marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-herois',
  templateUrl: './listar-herois.component.html',
  styleUrls: ['./listar-herois.component.scss']
})
export class ListarHeroisComponent implements OnInit {

  retornoApi: any[] = [];
  herois: HeroiModel[] = [];
  constructor(private consultaMarvelService: ConsultaMarvelService) { }

  ngOnInit(): void {
    this.consultaMarvelService.consultaHerois().subscribe(herois => {
      this.retornoApi = herois;
      this.trataRetorno();
    }, err => {
      console.log(err);
    });
  }

  trataRetorno(): void {
    this.retornoApi.forEach((heroi: any) => {
      this.herois.push(new HeroiModel(heroi.name, (heroi.thumbnail.path + '.' + heroi.thumbnail.extension), heroi.description));
    });
    console.log(this.herois);
  }
}
