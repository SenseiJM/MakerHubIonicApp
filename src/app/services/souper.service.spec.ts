import { TestBed } from '@angular/core/testing';

import { SouperService } from './souper.service';

describe('SouperService', () => {
  let service: SouperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
