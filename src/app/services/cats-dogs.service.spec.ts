import { TestBed } from '@angular/core/testing';

import { CatsDogsService } from './cats-dogs.service';

describe('CatsDogsService', () => {
  let service: CatsDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
