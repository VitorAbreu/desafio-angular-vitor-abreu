import { ConsultaMarvelService } from './../shared/consulta-marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-herois',
  templateUrl: './listar-herois.component.html',
  styleUrls: ['./listar-herois.component.scss']
})
export class ListarHeroisComponent implements OnInit {

  herois = [];
  constructor(private consultaMarvelService: ConsultaMarvelService) { }

  ngOnInit(): void {
    console.log('to chamando');

    this.consultaMarvelService.consultaHerois().subscribe(herois => {
      this.herois = herois;
      console.log(this.herois);
    }, err => {
      console.log(err);
    });
  }

}
