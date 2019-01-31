import { TestBed } from '@angular/core/testing';

import { SarticleService } from './sarticle.service';

describe('SarticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SarticleService = TestBed.get(SarticleService);
    expect(service).toBeTruthy();
  });
});
