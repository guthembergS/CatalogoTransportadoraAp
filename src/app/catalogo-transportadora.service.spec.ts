import { TestBed } from '@angular/core/testing';

import { CatalogoTransportadoraService } from './catalogo-transportadora.service';

describe('CatalogoTransportadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogoTransportadoraService = TestBed.get(CatalogoTransportadoraService);
    expect(service).toBeTruthy();
  });
});
