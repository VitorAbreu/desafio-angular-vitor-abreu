import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HqDetalhesComponent } from './hq-detalhes.component';

describe('HqDetalhesComponent', () => {
  let component: HqDetalhesComponent;
  let fixture: ComponentFixture<HqDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HqDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HqDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
