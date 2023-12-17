import { TestBed } from '@angular/core/testing';

import { ReductionCipherService } from './reduction-cipher.service';

describe('ReductionCipherService', () => {
  let service: ReductionCipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReductionCipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return reduction index of en char m and M', () => {
    var indexOfa = service.getCharIndex('m');

    var indexOfA = service.getCharIndex('M');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(4);
  });

  it('it should return reduction index of ru char м and М', () => {
    var indexOfa = service.getCharIndex('м');

    var indexOfA = service.getCharIndex('М');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(5);
  });
});
