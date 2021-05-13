import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheHeroiComponent } from './detalhe-heroi.component';

describe('DetalheHeroiComponent', () => {
  let component: DetalheHeroiComponent;
  let fixture: ComponentFixture<DetalheHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheHeroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
