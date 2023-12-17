import { TestBed } from '@angular/core/testing';

import { ReverseReductionCipherService } from './reverse-reduction-cipher.service';

describe('ReverseReductionCipherService', () => {
  let service: ReverseReductionCipherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReverseReductionCipherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should return reverse reduction index of en char m and M', () => {
    var indexOfa = service.getCharIndex('m');

    var indexOfA = service.getCharIndex('M');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(5);
  });

  it('it should return reverse reduction index of ru char м and М', () => {
    var indexOfa = service.getCharIndex('м');

    var indexOfA = service.getCharIndex('М');

    expect(indexOfa).toEqual(indexOfA);
    expect(indexOfa).toEqual(2);
  });
});
