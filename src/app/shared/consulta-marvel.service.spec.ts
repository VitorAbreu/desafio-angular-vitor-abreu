import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ConsultaMarvelService } from './consulta-marvel.service';

describe('ConsultaMarvelService', () => {
  let service: ConsultaMarvelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ConsultaMarvelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test consultaHerois()', () => {
    let consultaHerois = spyOn(service, 'consultaHerois').and.returnValue(of({'retorno':'retorno fake'}));
    service.consultaHerois();
    expect(consultaHerois).toHaveBeenCalled();
  });
});
