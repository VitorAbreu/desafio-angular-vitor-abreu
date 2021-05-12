import { HeroiModel } from './../model/heroi.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() heroi?: HeroiModel;

  ngOnInit(): void {
    console.log(this.heroi.foto);
    
  }

}
