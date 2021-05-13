import { HeroiModel } from './../model/heroi.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() heroi?: HeroiModel;

  ngOnInit(): void {
  }

  detalhesHeroi(id: string): void {
    this.router.navigate([`detalhe/${id}`]);
  }

}
