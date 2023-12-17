import { TestBed } from '@angular/core/testing';

import { LocaliseService } from './localise.service';

describe('LocaliseService', () => {
  let service: LocaliseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaliseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
