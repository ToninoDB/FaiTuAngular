import { TestBed } from '@angular/core/testing';

import { ContattoService } from './contatto.service';

describe('ContattoService', () => {
  let service: ContattoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContattoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
