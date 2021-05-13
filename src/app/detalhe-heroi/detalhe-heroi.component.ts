import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-heroi',
  templateUrl: './detalhe-heroi.component.html',
  styleUrls: ['./detalhe-heroi.component.scss']
})
export class DetalheHeroiComponent implements OnInit {

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activetedRoute.snapshot.params.id);
  }

}
