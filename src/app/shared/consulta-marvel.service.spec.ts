import { TestBed } from '@angular/core/testing';

import { ConsultaMarvelService } from './consulta-marvel.service';

describe('ConsultaMarvelService', () => {
  let service: ConsultaMarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaMarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
