import { TestBed } from '@angular/core/testing';

import { HabladorMovilService } from './hablador-movil.service';

describe('HabladorMovilService', () => {
  let service: HabladorMovilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabladorMovilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
