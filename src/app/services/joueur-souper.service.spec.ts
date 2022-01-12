import { TestBed } from '@angular/core/testing';

import { JoueurSouperService } from './joueur-souper.service';

describe('JoueurSouperService', () => {
  let service: JoueurSouperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurSouperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
