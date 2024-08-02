import { TestBed } from '@angular/core/testing';

import { FerreService } from './ferre.service';

describe('FerreService', () => {
  let service: FerreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FerreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
